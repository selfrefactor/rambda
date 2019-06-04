/**
 * Returns a fixed list of size `n` containing a specified identical value.
 *
 * @func
 * @category List
 * @sig a -> n -> [a]
 * @param {*} val The value to repeat.
 * @param {Number} n The desired size of the output list.
 * @return {Array} A new array containing `n` `value`s.
 * @example
 *
 *      R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
 *
 *      const obj = {};
 *      const repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]
 *      repeatedObjs[0] === repeatedObjs[1]; //=> true
 * @symb R.repeat(a, 0) = []
 * @symb R.repeat(a, 1) = [a]
 * @symb R.repeat(a, 2) = [a, a]
 */
export function repeat(val, n){
  if (arguments.length === 1) return _n => repeat(val, _n)

  const willReturn = Array(n)

  return willReturn.fill(val)
}
