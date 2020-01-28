import { concat } from './concat'
import { filter } from './filter'
import { includes } from './includes'

/**
 * Finds the set (i.e. no duplicates) of all elements contained in the first or
 * second list, but not both.
 *
 * @func
 * @category List
 * @sig a -> [*] -> [*] -> [*]
 * @param {Array} list1
 * @param {Array} list2
 * @return {Array} The elements in `list1` or `list2`, but not both
 * @example
 *
 *      R.symmetricDifference([1, 2, 3, 4], [3, 4, 5, 6]) // => [1, 2, 5, 6]
 *      R.symmetricDifference([]); //=> []
 */
export function symmetricDifference(list1, list2){
  if (arguments.length === 1) return _list => symmetricDifference(list1, _list)

  return concat(filter(value => !includes(value, list2), list1),
    filter(value => !includes(value, list1), list2))
}
