/**
 * Returns the result of concatenating the given lists or strings.
 *
 * @func
 * @category List
 * @sig [a] -> [a] -> [a]
 * @sig String -> String -> String
 * @param {Array|String} left The first list
 * @param {Array|String} right The second list
 * @return {Array|String} A list consisting of the elements of `left` followed by the elements of
 * `right`.
 *
 * @example
 *
 *      R.concat('ABC', 'DEF'); // 'ABCDEF'
 *      R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 *      R.concat([], []); //=> []
 */
export function concat(left, right){
  if (arguments.length === 1) return _right => concat(left, _right)

  return typeof left === 'string' ? `${ left }${ right }` : [ ...left, ...right ]
}
