/**
 * Returns the larger of its two arguments.
 *
 * @func
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @example
 *
 *      R.max(789, 123); //=> 789
 *      R.max('a', 'b'); //=> 'b'
 */
export function max(a, b){
  if (arguments.length === 1) return _b => max(a, _b)

  return b > a ? b : a
}
