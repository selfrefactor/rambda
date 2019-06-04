/**
 * Tests a regular expression against a String. Note that this function will
 * return an empty array when there are no matches. This differs from
 * [`String.prototype.match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
 * which returns `null` when there are no matches.
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
