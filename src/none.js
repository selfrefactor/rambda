export function none(fn, list){
  if (arguments.length === 1) return _list => none(fn, _list)

  return list.filter(fn).length === 0
}
