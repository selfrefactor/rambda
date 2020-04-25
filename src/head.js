export function head(list){
  if (typeof list === 'string') return list[ 0 ] || ''

  return list[ 0 ]
}
