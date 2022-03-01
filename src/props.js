import { _isArray } from './_internals/_isArray.js'
import { mapArray } from './map.js'

export function props(propsToPick, obj){
  if (arguments.length === 1){
    return _obj => props(propsToPick, _obj)
  }
  if (!_isArray(propsToPick)){
    throw new Error('propsToPick is not a list')
  }

  return mapArray(prop => obj[ prop ], propsToPick)
}
