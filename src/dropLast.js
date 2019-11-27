export function dropLast(n, list){
  if (arguments.length === 1) return _list => dropLast(n, _list)

  return n > 0 ? list.slice(0, -n) : list.slice()
}
