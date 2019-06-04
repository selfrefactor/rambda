/**
 * Adds two values.
 *
 * @func
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 * @example
 *
 *      R.add(2, 3);       //=>  5
 *      R.add(7)(10);      //=> 17
 */
export function add(a, b){
  if (arguments.length === 1) return _b => add(a, _b)

  return a + b
}
