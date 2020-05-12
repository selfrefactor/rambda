export function prepend(x, listOrString){
  if (arguments.length === 1)
    return _listOrString => prepend(x, _listOrString)

  if (typeof listOrString === 'string') return `${ x }${ listOrString }`

  return [ x ].concat(listOrString)
}
