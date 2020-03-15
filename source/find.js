export function find(fn, list){
  if (arguments.length === 1) return _list => find(fn, _list)

  return list.find(fn)
}
