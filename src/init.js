import baseSlice from './_internals/baseSlice'

export function init(listOrString){
  if (typeof listOrString === 'string') return listOrString.slice(0, -1)

  return listOrString.length ? baseSlice(
    listOrString, 0, -1
  ) : []
}
