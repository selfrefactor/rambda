import { path } from './path.js'
import { sortBy } from './sortBy.js'

export function sortByPath(sortPath, list){
  if (arguments.length === 1) return _list => sortByPath(sortPath, _list)

  return sortBy(path(sortPath), list)
}
