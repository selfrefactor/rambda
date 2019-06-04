/**
 * Splits a collection into slices of the specified length.
 *
 * @func
 * @category List
 * @sig Number -> [a] -> [[a]]
 * @sig Number -> String -> [String]
 * @param {Number} n
 * @param {Array} list
 * @return {Array}
 * @example
 *
 *      R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); //=> [[1, 2, 3], [4, 5, 6], [7]]
 *      R.splitEvery(3, 'foobarbaz'); //=> ['foo', 'bar', 'baz']
 */
export function splitEvery(n, list){
  if (arguments.length === 1) return _list => splitEvery(n, _list)

  const numValue = n > 1 ? n : 1

  const willReturn = []
  let counter = 0

  while (counter < list.length){
    willReturn.push(list.slice(counter, counter += numValue))
  }

  return willReturn
}
