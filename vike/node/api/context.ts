export { isVikeCliOrApi }
// export { getOperation }
export { setOperation as setOperation }

import type { Operation } from './types.js'
import { assert, getGlobalObject } from './utils.js'

const globalObject = getGlobalObject('context.ts', {
  apiOperation: undefined as Operation | undefined
})

function getOperation(): Operation {
  assert(globalObject.apiOperation)
  return globalObject.apiOperation
}
function isVikeCliOrApi(): boolean {
  // The CLI uses the API
  return !!globalObject.apiOperation
}
function setOperation(operation: Operation): void {
  assert(!globalObject.apiOperation)
  globalObject.apiOperation = operation
}