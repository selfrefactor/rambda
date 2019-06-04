/**
 * Takes a function and two values, and returns whichever value produces the
 * smaller result when passed to the provided function.
 *
 * @func
 * @category Relation
 * @sig Ord b => (a -> b) -> a -> a -> a
 * @param {Function} fn
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @example
 *
 *      //  square :: Number -> Number
 *      const square = n => n * n;
 *
 *      R.minBy(square, -3, 2); //=> 2
 *
 *      R.reduce(R.minBy(square), Infinity, [3, -5, 4, 1, -2]); //=> 1
 *      R.reduce(R.minBy(square), Infinity, []); //=> Infinity
 */
export function minBy(fn, a, b){
  if (arguments.length === 2){
    return _b => minBy(fn, a, _b)
  } else if (arguments.length === 1){
    return (_a, _b) => minBy(fn, _a, _b)
  }

  return fn(b) < fn(a) ? b : a
}
