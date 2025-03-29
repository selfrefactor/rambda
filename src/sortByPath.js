import { path } from './path.js'
import { sortBy } from './sortBy.js'

export function sortByPath(sortPath) {
  return list => sortBy(path(sortPath))(list)
}
