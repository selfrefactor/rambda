import { _isArray } from './_internals/_isArray'
import { _indexOf } from './indexOf'

export function includes(valueToFind, input){
  if (arguments.length === 1) return _input => includes(valueToFind, _input)
  if (typeof input === 'string'){
    return input.includes(valueToFind)
  }
  if (!input){
    throw new TypeError(`Cannot read property \'indexOf\' of ${ input }`)
  }
  if (!_isArray(input)) return false

  return _indexOf(valueToFind, input) > -1
}
