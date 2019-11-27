export function all(fn, list){
  if (arguments.length === 1) return _list => all(fn, _list)

  for (let i = 0; i < list.length; i++){
    if (!fn(list[ i ], i))
      return false
  }

  return true
}
