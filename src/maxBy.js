/**
 * Takes a function and two values, and returns whichever value produces the
 * larger result when passed to the provided function.
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
 *      R.maxBy(square, -3, 2); //=> -3
 *
 *      R.reduce(R.maxBy(square), 0, [3, -5, 4, 1, -2]); //=> -5
 *      R.reduce(R.maxBy(square), 0, []); //=> 0
 */
export function maxBy(fn, a, b){
  if (arguments.length === 2){
    return _b => maxBy(fn, a, _b)
  } else if (arguments.length === 1){
    return (_a, _b) => maxBy(fn, _a, _b)
  }

  return fn(b) > fn(a) ? b : a
}
