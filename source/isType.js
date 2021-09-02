import {type} from './type'

export function isType(xType, x) {
  if (arguments.length === 1) {
    return xHolder => isType(xType, xHolder)
  }

  return type(x) === xType
}
