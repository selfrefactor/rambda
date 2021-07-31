import { equals } from './equals'
import { type } from './type'
import { _isArray } from './_internals/_isArray'

export function _indexOf(valueToFind, list) {
  if (!_isArray(list)){
    throw new Error(`Cannot read property 'indexOf' of ${list}`)
  }
  const typeOfValue = type(valueToFind)
  if (!['Object', 'Array', 'NaN', 'RegExp'].includes(typeOfValue)) return list.indexOf(valueToFind)
  
  let index = -1
  let foundIndex = -1
  const { length } = list

  while (++index < length && foundIndex === -1){
    if (equals(list[index], valueToFind)){
      foundIndex = index
    }
  }

  return foundIndex
}

export function indexOf(valueToFind, list){
  if (arguments.length === 1){
    return _list => _indexOf(valueToFind, _list)
  }

  return _indexOf(valueToFind, list)
}
