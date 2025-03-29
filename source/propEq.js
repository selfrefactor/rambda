import { equalsFn } from './equals.js'

export function propEq(valueToMatch, propToFind) {
  return obj => {
    if (!obj) {
      return false
    }

    return equalsFn(valueToMatch, obj[propToFind])
  }
}
