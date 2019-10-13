import { map } from './map'

export function forEach(fn, list){
  if (arguments.length === 1) return _list => forEach(fn, _list)

  map(fn, list)

  return list
}
