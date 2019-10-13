/**
 * Checks if a string ends with the provided substring.
 *
 * @func
 * @category String
 * @sig String -> String -> Boolean
 * @param {*} suffix
 * @param {*} list
 * @return {Boolean}
 * @example
 *
 *      R.endsWith('c', 'abc')                //=> true
 *      R.endsWith('b', 'abc')                //=> false
 */
export function endsWith(suffix, list){
  if (arguments.length === 1) return _list => endsWith(suffix, _list)

  return list.endsWith(suffix)
}
