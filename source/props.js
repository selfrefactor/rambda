import { mapArray } from './map'

export function props(propsToPick, obj){
  if (arguments.length === 1){
    return _obj => props(propsToPick, _obj)
  }

  return mapArray(prop => obj[ prop ], propsToPick)
}
