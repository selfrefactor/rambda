import { _isArray } from './_internals/_isArray'
import { equals } from './equals'

export function includes(valueToFind, input){
  if (arguments.length === 1) return _input => includes(valueToFind, _input)
  if (typeof input === 'string'){
    return input.includes(valueToFind)
  }
  if (!input){
    throw new TypeError(`Cannot read property \'indexOf\' of ${ input }`)
  }
  if (!_isArray(input)) return false

  let index = -1

  while (++index < input.length){
    if (equals(input[ index ], valueToFind)){
      return true
    }
  }

  return false
}
