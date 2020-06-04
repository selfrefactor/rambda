export function find(predicate, list){
  if (arguments.length === 1) return _list => find(predicate, _list)
  let index = 0

  while (index < list.length){
    const value = list[ index ]

    if (predicate(value, index)){
      return value
    }

    index++
  }
}
