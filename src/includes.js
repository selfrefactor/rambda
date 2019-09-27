import { equals } from './equals'
/**
 * Returns `true` if the specified value is equal, in [`R.equals`](#equals)
 * terms, to at least one element of the given list; `false` otherwise.
 * Works also with strings.
 *
 * @func
 * @category List
 * @sig a -> [a] -> Boolean
 * @param {Object} target The item to compare against.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if an equivalent item is in the list, `false` otherwise.
 * @example
 *
 *      R.includes(3, [1, 2, 3]); //=> true
 *      R.includes(4, [1, 2, 3]); //=> false
 *      R.includes({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
 *      R.includes([42], [[42]]); //=> true
 *      R.includes('ba', 'banana'); //=>true
 */
export function includes(target, list){
  if (arguments.length === 1) return _input => includes(target, _input)

  if (typeof list === 'string'){
    return list.includes(target)
  }
  if (!Array.isArray(list)) return false

  let index = -1

  while (++index < list.length){
    if (equals(list[ index ], target)){
      return true
    }
  }

  return false
}
