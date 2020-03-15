export function sort(fn, list){
  if (arguments.length === 1) return _list => sort(fn, _list)

  const arrClone = list.slice()

  return arrClone.sort(fn)
}
