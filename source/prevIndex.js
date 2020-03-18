export function prevIndex(index, list){
  const base = typeof list === 'number' ?
    list :
    list.length
  const newIndex = index === 0 ?
    base - 1 :
    index - 1

  return newIndex
}
