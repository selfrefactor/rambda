import { equals } from './equals'
import {_isIterable} from './_internals/isIterable'

export function _indexOf(valueToFind, list) {
  if (!_isIterable(valueToFind)) return list.indexOf(valueToFind)

  let index = -1
  list.forEach((x, i) => {
    if (index > -1) return
    if (equals(x, valueToFind)) index = i
  })

  return index
}


export function indexOf(valueToFind, list){
  if (arguments.length === 1){
    return _list => indexOf(valueToFind, _list)
  }

  return _indexOf(valueToFind, list)
}
