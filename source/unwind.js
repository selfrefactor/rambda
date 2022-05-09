import { _isArray } from './_internals/_isArray.js'
import { mapArray } from './map.js'

export function unwind(property, obj){
  if (arguments.length === 1){
    return _obj => unwind(property, _obj)
  }

  if (!_isArray(obj[ property ])) return [ obj ]

  return mapArray(x => ({
    ...obj,
    [ property ] : x,
  }), obj[ property ])
}
