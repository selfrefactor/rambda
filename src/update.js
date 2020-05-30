export function update(
  index, newValue, list
){
  if (newValue === undefined){
    return (_val, _list) => update(
      index, _val, _list
    )
  } else if (list === undefined){
    return _list => update(
      index, newValue, _list
    )
  }

  const arrClone = list.slice()

  return arrClone.fill(
    newValue, index, index + 1
  )
}
