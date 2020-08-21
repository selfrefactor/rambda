export function removeIndex(list, index){
  if (arguments.length === 1) return _index => removeIndex(list, _index)
  if (index <= 0) return list.slice(1)
  if (index >= list.length - 1) return list.slice(0, list.length - 1)

  return [ ...list.slice(0, index), ...list.slice(index + 1) ]
}
