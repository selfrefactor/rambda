import { path } from './path'
import { sortBy } from './sortBy'

export function sortByPath(sortPath, list){
  if (arguments.length === 1) return _list => sortByPath(sortPath, _list)

  return sortBy(path(sortPath), list)
}
