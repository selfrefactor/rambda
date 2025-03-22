import { filter } from './filter.js'

export function reject(predicate) {
  return list => filter(x => !predicate(x))(list)
}
