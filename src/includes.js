import { isArray } from './_internals/isArray.js'
import { _indexOf } from './equals.js'

export function includes(valueToFind) {
  return iterable => {
    if (typeof iterable === 'string') {
      return iterable.includes(valueToFind)
    }
    if (!iterable) {
      throw new TypeError(`Cannot read property \'indexOf\' of ${iterable}`)
    }
    if (!isArray(iterable)) {
      return false
    }

    return _indexOf(valueToFind, iterable) > -1
  }
}
