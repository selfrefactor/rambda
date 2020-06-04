export function find(predicate, list){
  if (arguments.length === 1) return _list => find(predicate, _list)
  if (list.find) return list.find(predicate)

  let index = 0
  const len = list.length

  while (index < len){
    const value = list[ index ]

    if (predicate(value, index)){
      return value
    }

    index++
  }
}
