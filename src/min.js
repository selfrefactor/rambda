/**
 * Returns the smaller of its two arguments.
 *
 * @func
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @example
 *
 *      R.min(789, 123); //=> 123
 *      R.min('a', 'b'); //=> 'a'
 */
export function min(a, b){
  if (arguments.length === 1) return _b => min(a, _b)

  return b < a ? b : a
}
