import { equals } from './equals'
import {_isIterable} from './_internals/isIterable'
import { _isArray } from './_internals/_isArray'

export function _indexOf(valueToFind, list) {
  if (!_isArray(list)){
    throw new Error(`Cannot read property 'indexOf' of ${list}`)
  }
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
    return _list => _indexOf(valueToFind, _list)
  }

  return _indexOf(valueToFind, list)
}
