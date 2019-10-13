/**
 * Checks if a string starts with the provided substring.
 *
 * @func
 * @category String
 * @sig String -> String -> Boolean
 * @param {*} prefix
 * @param {*} list
 * @return {Boolean}
 * @see R.endsWith
 * @example
 *
 *      R.startsWith('a', 'abc')                //=> true
 *      R.startsWith('b', 'abc')                //=> false
 */
export function startsWith(prefix, list){
  if (arguments.length === 1) return _list => startsWith(prefix, _list)

  return list.startsWith(prefix)
}
