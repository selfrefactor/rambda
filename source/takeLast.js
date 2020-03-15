import baseSlice from './internal/baseSlice'

export function takeLast(n, list){
  if (arguments.length === 1) return _list => takeLast(n, _list)

  const len = list.length
  if (n < 0) return list.slice()
  let numValue = n > len ? len : n

  if (typeof list === 'string') return list.slice(len - numValue)

  numValue = len - numValue

  return baseSlice(
    list, numValue, len
  )
}
