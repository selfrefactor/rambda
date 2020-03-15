export function indexOf(target, list){
  if (arguments.length === 1) return _list => indexOf(target, _list)

  let index = -1
  const { length } = list

  while (++index < length){
    if (list[ index ] === target){
      return index
    }
  }

  return -1
}
