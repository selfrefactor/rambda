/**
 * Returns inverted version of provided function
 *
 * @func
 * @category Logic
 * @sig (*... -> *) -> (*... -> Boolean)
 * @param {Function} fn
 * @return {Function}
 * @example
 *
 *      const isNotNil = R.complement(R.isNil);
 *      isNil(null); //=> true
 *      isNotNil(null); //=> false
 *      isNil(7); //=> false
 *      isNotNil(7); //=> true
 */
export function complement(fn){
  return (...input) => !fn(...input)
}
