export function drop(n, listOrString){
  if (arguments.length === 1) return _list => drop(n, _list)

  return listOrString.slice(n > 0 ? n : 0)
}
