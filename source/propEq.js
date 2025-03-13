import { equalsFn } from './equals.js'
import { prop } from './prop.js'

export function propEq(valueToMatch, propToFind) {
  return obj => {
    if (!obj) {
      return false
    }

    return equalsFn(valueToMatch, prop(propToFind, obj))
  }
}
