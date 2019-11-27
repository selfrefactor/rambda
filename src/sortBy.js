export function sortBy(fn, list){
  if (arguments.length === 1) return _list => sortBy(fn, _list)

  const arrClone = list.slice()

  return arrClone.sort((a, b) => {
    const fnA = fn(a)
    const fnB = fn(b)

    if (fnA === fnB) return 0

    return fnA < fnB ? -1 : 1
  })
}
