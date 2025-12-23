import { find } from './find.js'

export function exists(predicate) {
  return list => {
		return find(predicate)(list) !== undefined
  }
}
