import baseSlice from './internal/baseSlice'

export function take(num, x) {
  if (arguments.length === 1) return xHolder => take(num, xHolder)

  if (typeof x === 'string') {
    return x.slice(0, num)
  }

  return baseSlice(x, 0, num)
}
