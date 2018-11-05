import baseSlice from './internal/baseSlice'

export function takeLast(num, x) {
  if (arguments.length === 1)
    return xHolder => takeLast(num, xHolder)

  const len = x.length

  let numValue = num > len ? len : num

  if (typeof x === 'string') {
    return x.slice(len - numValue)
  }
  numValue = len - numValue

  return baseSlice(x, numValue, len)
}
