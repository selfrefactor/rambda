export function indexOf(valueToFind, list){
  if (arguments.length === 1){
    return _list => indexOf(valueToFind, _list)
  }

  let index = -1
  const { length } = list

  while (++index < length){
    if (list[ index ] === valueToFind){
      return index
    }
  }

  return -1
}
