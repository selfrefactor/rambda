import { all } from './all.js'

export function none(predicate, list){
  if (arguments.length === 1) return _list => none(predicate, _list)

  return !all(predicate, list)
}
