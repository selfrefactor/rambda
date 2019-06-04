/**
 * Returns a list of numbers from `from` (inclusive) to `to` (exclusive).
 *
 * @func
 * @category List
 * @sig Number -> Number -> [Number]
 * @param {Number} from The first number in the list.
 * @param {Number} to One more than the last number in the list.
 * @return {Array} The list of numbers in the set `[a, b)`.
 * @example
 *
 *      R.range(1, 5);    //=> [1, 2, 3, 4]
 *      R.range(50, 53);  //=> [50, 51, 52]
 */
export function range(from, to){
  if (arguments.length === 1) return _to => range(from, _to)

  const len = to - from
  const willReturn = Array(len)

  for (let i = 0; i < len; i++){
    willReturn[ i ] = from + i
  }

  return willReturn
}
