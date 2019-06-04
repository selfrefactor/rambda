import { equals } from './equals'

/**
 * Returns `true` if the specified value is equal, in [`R.equals`](#equals)
 * terms, to at least one element of the given list; `false` otherwise.
 * Works also with strings.
 *
 * @func
 * @category List
 * @sig a -> [a] -> Boolean
 * @param {Object} val The item to compare against.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if an equivalent item is in the list, `false` otherwise.
 * @deprecated
 * @example
 *
 *      R.contains(3, [1, 2, 3]); //=> true
 *      R.contains(4, [1, 2, 3]); //=> false
 *      R.contains({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
 *      R.contains([42], [[42]]); //=> true
 *      R.contains('ba', 'banana'); //=>true
 */
export function contains(val, list){
  if (arguments.length === 1) return _list => contains(val, _list)

  let index = -1

  while (++index < list.length){
    if (equals(list[ index ], val)){
      return true
    }
  }

  return false
}
