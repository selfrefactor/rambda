import { equals } from '../equals'
import {_isObject} from './_isObject'

/**
 * Get first index of item in a list based on native `indexOf` or on `R.equals` if input is list of objects.
 */
export function _indexOf(valueToFind, list) {
  if (!_isObject(valueToFind)) return list.indexOf(valueToFind)

  let index = -1
  list.forEach((x, i) => {
    if (index > -1) return
    if (equals(x, valueToFind)) index = i
  })

  return index
}
