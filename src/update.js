export function update(
  idx, val, list
){
  if (val === undefined){
    return (_val, _list) => update(
      idx, _val, _list
    )
  } else if (list === undefined){
    return _list => update(
      idx, val, _list
    )
  }

  const arrClone = list.slice()

  return arrClone.fill(
    val, idx, idx + 1
  )
}
