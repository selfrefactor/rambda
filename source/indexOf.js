import { equals } from './equals'
import { type } from './type'
import { _isArray } from './_internals/_isArray'

export function _indexOf(valueToFind, list) {
  if (!_isArray(list)){
    throw new Error(`Cannot read property 'indexOf' of ${list}`)
  }
  const typeOfValue = type(valueToFind)
  if (!['Object', 'Array', 'NaN'].includes(typeOfValue)) return list.indexOf(valueToFind)
  
  let foundIndex = -1
  list.forEach((x, i) => {
    if (foundIndex > -1) return
    if (equals(x, valueToFind)) foundIndex = i
  })

  return foundIndex
}


export function indexOf(valueToFind, list){
  if (arguments.length === 1){
    return _list => _indexOf(valueToFind, _list)
  }

  return _indexOf(valueToFind, list)
}
