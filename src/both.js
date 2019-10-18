/**
 * A function which calls the two provided functions and returns the `&&`
 * of the results.
 * It returns the result of the first function if it is false-y and the result
 * of the second function otherwise.
 *
 * @func
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
 * @param {Function} f A predicate
 * @param {Function} g Another predicate
 * @return {Function} a function that applies its arguments to `f` and `g` and `&&`s their outputs together.
 * @example
 *
 *   var between = function(a, b, c) {return a < b && b < c;};
 *   var total20 = function(a, b, c) {return a + b + c === 20;};
 *   var f = R.both(between, total20);
 *   f(5,7,8) //=> true
 */
export function both(f, g){
  if (arguments.length === 1) return _g => both(f, _g)

  return (...input) => f(...input) && g(...input)
}
