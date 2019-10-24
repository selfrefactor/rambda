import baseSlice from './internal/baseSlice'

/**
 * Returns the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `take` method).
 *
 * @func
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {*} list
 * @return {*}
 * @example
 *
 *      R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
 *      R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      R.take(3, 'ramda');               //=> 'ram'
 */
export function take(n, list){
  if (arguments.length === 1) return _list => take(n, _list)
  if (n < 0) return list.slice()
  if (typeof list === 'string') return list.slice(0, n)

  return baseSlice(list, 0, n)
}
