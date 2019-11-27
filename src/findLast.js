export function findLast(fn, list){
  if (arguments.length === 1) return _list => findLast(fn, _list)

  let index = list.length

  while (--index >= 0){
    if (fn(list[ index ], index)){
      return list[ index ]
    }
  }

  return undefined
}
