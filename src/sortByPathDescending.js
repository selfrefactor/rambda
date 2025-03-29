import { path } from './path.js'
import { sortByDescending } from './sortByDescending.js'

export function sortByPathDescending(sortPath) {
  return list => sortByDescending(path(sortPath))(list)
}
