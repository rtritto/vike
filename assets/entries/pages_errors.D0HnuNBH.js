import{j as e,o as a,i}from"../chunks/chunk-QQHFLgus.js";import{L as s}from"../chunks/chunk-DJTIoNMK.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-7E_FEcaS.js";/* empty css                      */const t=[{pageSectionId:"server-side",pageSectionLevel:2,pageSectionTitle:"Server-side"},{pageSectionId:"client-side",pageSectionLevel:2,pageSectionTitle:"Client-side"},{pageSectionId:"verbose",pageSectionLevel:2,pageSectionTitle:"Verbose"},{pageSectionId:"see-also",pageSectionLevel:2,pageSectionTitle:"See also"}];function l(r){const n={a:"a",blockquote:"blockquote",code:"code",figure:"figure",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...r.components};return e.jsxs(e.Fragment,{children:[e.jsx("h2",{id:"server-side",children:"Server-side"}),`
`,e.jsxs(n.p,{children:["Server-side errors are exposed over ",e.jsx(n.code,{children:"pageContext.errorWhileRendering"})," at ",e.jsx(s,{href:"/renderPage",children:e.jsx(n.code,{children:"renderPage()"})}),":"]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// server.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(n.span,{style:{color:"#24292E"},children:" { renderPage } "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(n.span,{style:{color:"#032F62"},children:" 'vike/server'"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// Any server: Express.js, Cloudflare Worker, AWS Lambda Function, Fastify, Hono, Nitro, ..."})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"server."}),e.jsx(n.span,{style:{color:"#6F42C1"},children:"addMiddleware"}),e.jsx(n.span,{style:{color:"#24292E"},children:"({"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"  method: "}),e.jsx(n.span,{style:{color:"#032F62"},children:"'GET'"}),e.jsx(n.span,{style:{color:"#24292E"},children:","})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"  route: "}),e.jsx(n.span,{style:{color:"#032F62"},children:"'*'"}),e.jsx(n.span,{style:{color:"#24292E"},children:", "}),e.jsx(n.span,{style:{color:"#6A737D"},children:"// catch-all"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"  async"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" handler"}),e.jsx(n.span,{style:{color:"#24292E"},children:"("}),e.jsx(n.span,{style:{color:"#E36209"},children:"request"}),e.jsx(n.span,{style:{color:"#24292E"},children:") {"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"    const"}),e.jsx(n.span,{style:{color:"#005CC5"},children:" pageContext"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(n.span,{style:{color:"#D73A49"},children:" await"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" renderPage"}),e.jsx(n.span,{style:{color:"#24292E"},children:"({ urlOriginal: request.url })"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"    if"}),e.jsx(n.span,{style:{color:"#24292E"},children:" (pageContext.errorWhileRendering) {"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"      /* Vike already calls console.error() so the following line isn't needed."})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"      console.error(pageContext.errorWhileRendering)"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"      */"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"      // If you use an error tracker (e.g. Sentry):"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"      myErrorTracker."}),e.jsx(n.span,{style:{color:"#6F42C1"},children:"intercept"}),e.jsx(n.span,{style:{color:"#24292E"},children:"(pageContext.errorWhileRendering)"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"    }"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"    // The HTTP response of the page."})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"    // If pageContext.errorWhileRendering is defined then this is usually the error page."})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"    return"}),e.jsx(n.span,{style:{color:"#24292E"},children:" pageContext.httpResponse"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  }"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"})"})})]})})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Vike calls ",e.jsx(n.code,{children:"console.error(err)"})," for any error it encounters. With the upcoming ",e.jsxs(n.a,{href:"https://github.com/vikejs/vike/issues/1438",children:["new hook ",e.jsx(n.code,{children:"onLog()"})," (#1439)"]})," you'll have control over Vike's logging."]}),`
`]}),`
`,e.jsxs(n.p,{children:["See also ",e.jsx(s,{href:"/error-page"}),"."]}),`
`,e.jsxs(n.p,{children:["You can use any error tracker, such as ",e.jsx(n.a,{href:"https://sentry.io/",children:"Sentry"}),", ",e.jsx(n.a,{href:"https://www.bugsnag.com/",children:"Bugsnag"}),", ",e.jsx(n.a,{href:"https://rollbar.com/",children:"Rollbar"}),", or your own custom error tracking. For that, make sure to use the error tracker's server-side interceptor. For example with Sentry:"]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(n.span,{style:{color:"#005CC5"},children:" *"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" as"}),e.jsx(n.span,{style:{color:"#24292E"},children:" Sentry "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(n.span,{style:{color:"#032F62"},children:' "@sentry/node"'}),e.jsx(n.span,{style:{color:"#24292E"},children:";"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// ..."})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"    if"}),e.jsx(n.span,{style:{color:"#24292E"},children:" (pageContext.errorWhileRendering) {"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"      Sentry."}),e.jsx(n.span,{style:{color:"#6F42C1"},children:"captureException"}),e.jsx(n.span,{style:{color:"#24292E"},children:"(e)"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"    }"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// ..."})})]})})}),`
`,e.jsx("h2",{id:"client-side",children:"Client-side"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(s,{href:"/client",children:e.jsx(n.code,{children:"+client.js"})})," in order to make sure that your error handling code is initialized before any other code executes."]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// /pages/+client.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// The first lines of JavaScript executed on the website."})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"window."}),e.jsx(n.span,{style:{color:"#6F42C1"},children:"addEventListener"}),e.jsx(n.span,{style:{color:"#24292E"},children:"("}),e.jsx(n.span,{style:{color:"#032F62"},children:"'error'"}),e.jsx(n.span,{style:{color:"#24292E"},children:", ("}),e.jsx(n.span,{style:{color:"#E36209"},children:"err"}),e.jsx(n.span,{style:{color:"#24292E"},children:") "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"=>"}),e.jsx(n.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"   console."}),e.jsx(n.span,{style:{color:"#6F42C1"},children:"error"}),e.jsx(n.span,{style:{color:"#24292E"},children:"("}),e.jsx(n.span,{style:{color:"#032F62"},children:"'An error occurred:'"}),e.jsx(n.span,{style:{color:"#24292E"},children:", err)"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"})"})})]})})}),`
`,e.jsx("h2",{id:"verbose",children:"Verbose"}),`
`,e.jsxs(n.p,{children:["Vike prettifies transpilation errors, such as errors thrown by ",e.jsx(n.a,{href:"https://esbuild.github.io/",children:"esbuild"})," and ",e.jsx(n.a,{href:"https://babeljs.io/",children:"Babel"}),"."]}),`
`,e.jsxs(n.p,{children:["While Vike is careful about not removing relevant information, it may mistakenly do so. In that case ",e.jsx(n.a,{href:"https://github.com/vikejs/vike/issues/new",children:"create a new GitHub issue"}),". Until a Vike maintainer fixes the issue you can use the debug flag ",e.jsx(n.code,{children:"DEBUG=vike:error"}),"."]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"shell","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"shell","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# Show verbose original errors, with infinite stack trace (`Error.stackTraceLimit = Infinity`)"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"DEBUG"}),e.jsx(n.span,{style:{color:"#D73A49"},children:"="}),e.jsx(n.span,{style:{color:"#032F62"},children:"vike:error"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" npm"}),e.jsx(n.span,{style:{color:"#032F62"},children:" run"}),e.jsx(n.span,{style:{color:"#032F62"},children:" dev"})]})]})})}),`
`,e.jsx(n.p,{children:"For even more information:"}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"shell","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"shell","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# Usually only used by Vike maintainers"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"DEBUG"}),e.jsx(n.span,{style:{color:"#D73A49"},children:"="}),e.jsx(n.span,{style:{color:"#032F62"},children:"vike:error,vike:log"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" npm"}),e.jsx(n.span,{style:{color:"#032F62"},children:" run"}),e.jsx(n.span,{style:{color:"#032F62"},children:" dev"})]})]})})}),`
`,e.jsx("h2",{id:"see-also",children:"See also"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"/renderPage"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"/error-page"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"/client"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"/pageContext"}),`
`]}),`
`]})]})}function o(r={}){const{wrapper:n}=r.components||{};return n?e.jsx(n,{...r,children:e.jsx(l,{...r})}):l(r)}const d=Object.freeze(Object.defineProperty({__proto__:null,default:o,pageSectionsExport:t},Symbol.toStringTag,{value:"Module"})),m={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:a}},NavHeader:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+NavHeader.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:i}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/errors/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:d}}};export{m as configValuesSerialized};
