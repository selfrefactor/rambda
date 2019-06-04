/**
 * Returns a new list containing the contents of the given list, followed by
 * the given element.
 *
 * @func
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} el The element to add to the end of the new list.
 * @param {Array} list The list of elements to add a new item to.
 *        list.
 * @return {Array} A new list containing the elements of the old list followed by `el`.
 * @example
 *
 *      R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
 *      R.append('tests', []); //=> ['tests']
 *      R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
 */
export function append(el, list){
  if (arguments.length === 1) return _list => append(el, _list)

  if (typeof list === 'string') return `${ list }${ el }`

  const clone = list.concat()
  clone.push(el)

  return clone
}
