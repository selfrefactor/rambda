export function prepend(el, list){
  if (arguments.length === 1) return _list => prepend(el, _list)

  if (typeof list === 'string') return `${ el }${ list }`

  const clone = [ el ].concat(list)

  return clone
}
