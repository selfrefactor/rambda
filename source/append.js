export function append(el, list){
  if (arguments.length === 1) return _list => append(el, _list)

  if (typeof list === 'string') return `${ list }${ el }`

  const clone = list.slice()
  clone.push(el)

  return clone
}
