import { filter } from './filter'
import { includes } from './includes'

/**
 * Combines two lists into a set (i.e. no duplicates) composed of those
 * elements common to both lists.
 *
 * @func
 * @category List
 * @sig a -> [*] -> [*] -> [*]
 * @param {Array} list1
 * @param {Array} list2
 * @return {Array} The list of elements found in both lists
 * @example
 *
 *      R.intersection([1, 2, 3, 4], [3, 4, 5, 6]) // => [3, 4]
 *      R.intersection([]); //=> []
 */
export function intersection(list1, list2){
  if (arguments.length === 1) return _list => intersection(list1, _list)

  return filter(value => includes(value, list2), list1)
}
