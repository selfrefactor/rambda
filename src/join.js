/**
 * Returns a string made by inserting the `separator` between each element and
 * concatenating all the elements into a single string.
 *
 * @func
 * @category List
 * @sig String -> [a] -> String
 * @param {Number|String} separator The string used to separate the elements.
 * @param {Array} list The elements to join into a string.
 * @return {String} str The string made by concatenating `list` with `separator`.
 * @example
 *
 *      const spacer = R.join(' ');
 *      spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
 *      R.join('|', [1, 2, 3]);    //=> '1|2|3'
 */
export function join(separator, list){
  if (arguments.length === 1) return _list => join(separator, _list)

  return list.join(separator)
}
