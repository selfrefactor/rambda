import { filter } from './filter'

export function rejectIndexed(predicate, list){
  if (arguments.length === 1) return _list => rejectIndexed(predicate, _list)

  return filter((x, i) => !predicate(x, i), list)
}
