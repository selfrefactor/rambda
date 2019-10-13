/**
 * A function wrapping calls to the two functions in an `||` operation,
 * returning the result of the first function if it is truth-y and the result
 * of the second function otherwise.
 *
 * @func
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
 * @param {Function} f a predicate
 * @param {Function} g another predicate
 * @return {Function} a function that applies its arguments to `f` and `g` and `||`s their outputs together.
 * @example
 *
 *   var between = function(a, b, c) {return a < b && b < c;};
 *   var total20 = function(a, b, c) {return a + b + c === 20;};
 *   var f = R.both(between, total20);
 *   f(7,8,5) //=> true
 */
export function either(f, g){
  if (arguments.length === 1) return _g => either(f, _g)

  return (...input) => f(...input) || g(...input)
}
