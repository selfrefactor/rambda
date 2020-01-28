import baseSlice from './internal/baseSlice'

export function take(n, list){
  if (arguments.length === 1) return _list => take(n, _list)
  if (n < 0) return list.slice()
  if (typeof list === 'string') return list.slice(0, n)

  return baseSlice(
    list, 0, n
  )
}
