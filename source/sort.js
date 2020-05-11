export function sort(sortFn, list){
  if (arguments.length === 1) return _list => sort(sortFn, _list)

  const clone = list.slice()

  return clone.sort(sortFn)
}
