/**
 * Divides two numbers. Equivalent to `a / b`.
 *
 * @func
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a / b`.
 * @example
 *
 *      R.divide(71, 100); //=> 0.71
 */
export function divide(a, b){
  if (arguments.length === 1) return _b => divide(a, _b)

  return a / b
}
