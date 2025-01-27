export { initOnPopState }
export { onPopState }

import { assertWarning, getGlobalObject } from './utils.js'
import { onPopStateBegin, type HistoryInfo } from './history.js'
import { renderPageClientSide } from './renderPageClientSide.js'
import { type ScrollTarget, setScrollPosition } from './setScrollPosition.js'
import { getCurrentLinkClick } from './initOnLinkClick.js'
import { isSamePageHashLink } from './skipLink.js'

const globalObject = getGlobalObject('initOnPopState.ts', { listeners: [] as Listener[] })

function initOnPopState() {
  // - The popstate event is trigged upon:
  //   - Back-/forward navigation.
  //     - By user clicking on his browser's back-/forward navigation (or using a shortcut)
  //     - By JavaScript: `history.back()` / `history.forward()`
  //   - URL hash change.
  //     - Click on `<a href="#some-hash" />`
  //       - The popstate event is *only* triggered if `href` starts with '#' (even if `href` is '/#some-hash' while the current URL's pathname is '/' then the popstate still isn't triggered)
  //     - `location.hash = 'some-hash'`
  // - The `event` argument of `window.addEventListener('popstate', (event) => /*...*/)` is useless: the History API doesn't provide the previous state (the popped state), see https://stackoverflow.com/questions/48055323/is-history-state-always-the-same-as-popstate-event-state
  window.addEventListener('popstate', async (): Promise<undefined> => {
    const currentLinkClick = getCurrentLinkClick()
    const { isNewState, previous, current } = onPopStateBegin()

    // We use currentLinkClick.href instead of current.url because current.url missing text links such as #:~:text=With%20frontmatter-,Global%20metadata,-What%20is%20global (e.g. Chrome strips the `#:~:text=` part from the URL before the popstate event).
    if (currentLinkClick && isSamePageHashLink(currentLinkClick.href)) {
      // Let the browser handle hash links
      return
    }

    const scrollTarget: ScrollTarget = current.state.scrollPosition || undefined

    const isUserPushStateNavigation = current.state.triggeredBy === 'user' || previous.state.triggeredBy === 'user'

    const isHashNavigation = removeHash(current.url) === removeHash(previous.url) && current.url !== previous.url
    // - `isNewState === true` when:
    //   - Click on `<a href="#some-hash" />` (note that Vike's `initOnLinkClick()` handler skips hash links)
    //   - `location.hash = 'some-hash'`
    // - `isNewState === false` when `popstate` was triggered by the user clicking on his browser's forward/backward history button.
    const isHashNavigationNew = isHashNavigation && isNewState

    const isBackwardNavigation =
      !current.state.timestamp || !previous.state.timestamp ? null : current.state.timestamp < previous.state.timestamp

    // We have to scroll ourselves because we use `window.history.scrollRestoration = 'manual'`. So far this seems to work. Alternatives in case it doesn't work:
    // - Alternative: we use `window.history.scrollRestoration = 'auto'`
    //   - Problem: I don't think it's possbible to set `window.history.scrollRestoration = 'auto'` only for hash navigation and not for non-hash navigations?
    //   - Problem: inconsistencies between browsers? For example specification says that setting `window.history.scrollRestoration` only affects the current entry in the session history but this contradicts what people are experiencing in practice.
    //     - Specification: https://html.spec.whatwg.org/multipage/history.html#the-history-interface
    //     - Practice: https://stackoverflow.com/questions/70188241/history-scrollrestoration-manual-doesnt-prevent-safari-from-restoring-scrol
    // - Alternative: we completely take over hash navigation and reproduce the browser's native behavior upon hash navigation.
    //   - By using the `hashchange` event.
    //   - Problem: conflict if user wants to override the browser's default behavior? E.g. for smooth scrolling, or when using hashes for saving states of some fancy animations.
    if (isHashNavigation) {
      if (!isHashNavigationNew) {
        setScrollPosition(scrollTarget)
      } else {
        // The browser already scrolled to `#${hash}` => the current scroll position is the right one => we saved it with `enhanceHistoryState()`.
      }
      return
    }

    let doNotRenderIfSamePage = isUserPushStateNavigation
    let abort: boolean | undefined | void
    globalObject.listeners.forEach((listener) => {
      abort ||= listener({ previous })
    })
    if (abort) {
      return
    }
    if (abort === false) {
      doNotRenderIfSamePage = false
    }

    await renderPageClientSide({ scrollTarget, isBackwardNavigation, doNotRenderIfSamePage })
  })
}

type Listener = (arg: { previous: HistoryInfo }) => void | boolean
// TODO/eventually: deprecate this onPopState(listener) function and let the user define +onPopState.js instead?
/** Control back-/forward navigation.
 *
 * https://vike.dev/onPopState
 */
function onPopState(listener: Listener) {
  assertWarning(false, 'onPopState() is experimental', { onlyOnce: true })
  globalObject.listeners.push(listener)
}

function removeHash(url: `/${string}`) {
  return url.split('#')[0]!
}
