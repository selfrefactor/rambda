export function join(separator, list){
  if (arguments.length === 1) return _list => join(separator, _list)

  return list.join(separator)
}
