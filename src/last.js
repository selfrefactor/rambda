export function last(list){
  if (typeof list === 'string') return list[ list.length - 1 ] || ''

  return list[ list.length - 1 ]
}
