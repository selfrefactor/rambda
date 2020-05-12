import { map } from './map'

export function forEach(predicate, list){
  if (arguments.length === 1) return _list => forEach(predicate, _list)

  map(predicate, list)

  return list
}
