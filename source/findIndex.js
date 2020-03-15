export function findIndex(fn, list){
  if (arguments.length === 1) return _list => findIndex(fn, _list)

  const len = list.length
  let index = -1

  while (++index < len){
    if (fn(list[ index ], index)){
      return index
    }
  }

  return -1
}
