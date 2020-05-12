export function append(x, listOrString){
  if (arguments.length === 1)
    return _listOrString => append(x, _listOrString)

  if (typeof listOrString === 'string') return `${ listOrString }${ x }`

  const clone = listOrString.slice()
  clone.push(x)

  return clone
}
