export function startsWith(prefix, list){
  if (arguments.length === 1) return _list => startsWith(prefix, _list)

  return list.startsWith(prefix)
}
