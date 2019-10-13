/**
 * Tests a regular expression against a String.
 *
 * @func
 * @category String
 * @sig RegExp -> String -> [String | Undefined]
 * @param {RegExp} pattern A regular expression.
 * @param {String} str The string to match against
 * @return {Array} The list of matches or empty array.
 * @example
 *
 *      R.match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']
 *      R.match(/a/, 'b'); //=> []
 *      R.match(/a/, null); //=> TypeError: null does not have a method named "match"
 */
export function match(pattern, str){
  if (arguments.length === 1) return _str => match(pattern, _str)

  const willReturn = str.match(pattern)

  return willReturn === null ? [] : willReturn
}
