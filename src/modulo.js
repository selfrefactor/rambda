/**
 * Divides the first parameter by the second and returns the remainder.
 *
 * @func
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The value to the divide.
 * @param {Number} b The pseudo-modulus
 * @return {Number} The result of `b % a`.
 * @example
 *
 *      R.modulo(17, 3); //=> 2
 *      R.modulo(-17, 3); //=> -2
 *      R.modulo(17, -3); //=> 2
 */
export function modulo(a, b){
  if (arguments.length === 1) return _b => modulo(a, _b)

  return a % b
}
