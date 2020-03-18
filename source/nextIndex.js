export function nextIndex(index, list){
  const base = typeof list === 'number' ?
    list :
    list.length

  const newIndex = index >= base - 1 ?
    0 :
    index + 1

  return newIndex
}
