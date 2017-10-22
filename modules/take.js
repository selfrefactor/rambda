import baseSlice from './internal/baseSlice'

export default function take (num, x) {
  if (x === undefined) {
    return xHolder => take(num, xHolder)
  }
  if (typeof x === 'string') {
    return x.slice(0, num)
  }

  return baseSlice(x, 0, num)
}
