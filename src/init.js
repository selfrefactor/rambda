import baseSlice from './_internals/baseSlice'

export function init(list){
  if (typeof list === 'string') return list.slice(0, -1)

  return list.length ? baseSlice(
    list, 0, -1
  ) : []
}
