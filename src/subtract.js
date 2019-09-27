/**
 * Subtracts its second argument from its first argument.
 *
 * @func
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a - b`.
 * @example
 *
 *      R.subtract(10, 8); //=> 2
 */
export function subtract(a, b){
  if (arguments.length === 1) return _b => subtract(a, _b)

  return a - b
}
