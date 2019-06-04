import baseSlice from './internal/baseSlice'

/**
 * Returns a new list containing the last `n` elements of the given list.
 * If `n > list.length`, returns a list of `list.length` elements.
 *
 * @func
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n The number of elements to return.
 * @param {Array} list The collection to consider.
 * @return {Array}
 * @example
 *
 *      R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']
 *      R.takeLast(2, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      R.takeLast(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.takeLast(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.takeLast(3, 'ramda');               //=> 'mda'
 */
export function takeLast(n, list){
  if (arguments.length === 1) return _list => takeLast(n, _list)

  const len = list.length

  let numValue = n > len ? len : n

  if (typeof list === 'string') return list.slice(len - numValue)

  numValue = len - numValue

  return baseSlice(list, numValue, len)
}
