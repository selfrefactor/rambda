/**
 * Returns a new list with the given element at the front, followed by the
 * contents of the list.
 *
 * @func
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} el The item to add to the head of the output list.
 * @param {Array} list The array to add to the tail of the output list.
 * @return {Array} A new array.
 * @example
 *
 *      R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
 */
export function prepend(el, list){
  if (arguments.length === 1) return _list => prepend(el, _list)

  if (typeof list === 'string') return `${ el }${ list }`

  const clone = [ el ].concat(list)

  return clone
}
