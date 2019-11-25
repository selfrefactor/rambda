/**
 * Returns `true` if both arguments are `true`; `false` otherwise.
 *
 * @func
 * @category Logic
 * @sig a -> b -> a | b
 * @param {Any} a
 * @param {Any} b
 * @return {Any} the first argument if it is falsy, otherwise the second argument.
 * @example
 *
 *      R.and(true, true); //=> true
 *      R.and(true, false); //=> false
 *      R.and(false, true); //=> false
 *      R.and(false, false); //=> false
 */
export function and(a, b){
  if (arguments.length === 1) return _b => and(a, _b)

  return a && b
}
