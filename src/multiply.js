/**
 * Multiplies two numbers. Equivalent to `a * b` but curried.
 *
 * @func
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a * b`.
 * @example
 *
 *      const double = R.multiply(2);
 *      const triple = R.multiply(3);
 *      double(3);       //=>  6
 *      triple(4);       //=> 12
 *      R.multiply(2, 5);  //=> 10
 */
export function multiply(a, b){
  if (arguments.length === 1) return _b => multiply(a, _b)

  return a * b
}
