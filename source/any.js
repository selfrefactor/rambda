export function any(fn, list){
  if (arguments.length === 1) return _list => any(fn, _list)

  let counter = 0
  while (counter < list.length){
    if (fn(list[ counter ], counter)){
      return true
    }
    counter++
  }

  return false
}
