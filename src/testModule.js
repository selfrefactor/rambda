/**
 * Determines whether a given string matches a given regular expression.
 *
 * @func
 * @category String
 * @sig RegExp -> String -> Boolean
 * @param {RegExp} pattern
 * @param {String} str
 * @return {Boolean}
 * @example
 *
 *      R.test(/^x/, 'xyz'); //=> true
 *      R.test(/^y/, 'xyz'); //=> false
 */
export function test(pattern, str){
  if (arguments.length === 1) return _str => test(pattern, _str)

  return str.search(pattern) !== -1
}
