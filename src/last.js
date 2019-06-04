/**
 * Returns the last element of the given list or string.
 *
 * @func
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @example
 *
 *      R.last(['fi', 'fo', 'fum']); //=> 'fum'
 *      R.last([]); //=> undefined
 *
 *      R.last('abc'); //=> 'c'
 *      R.last(''); //=> ''
 */
export function last(list){
  if (typeof list === 'string') return list[ list.length - 1 ] || ''

  return list[ list.length - 1 ]
}
