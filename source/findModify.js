export function findModify(fn, list){
  if (arguments.length === 1){
    return listHolder => findModify(fn, listHolder)
  }

  const len = list.length
  if (len === 0) return false

  let index = -1

  while (++index < len){
    const result = fn(list[ index ], index)
    if (result !== false){
      return result
    }
  }

  return false
}
