import baseSlice from './internal/baseSlice'

export default function takeLast (num, x) {
  if (x === undefined) {
    return xHolder => takeLast(num, xHolder)
  }
  const len = x.length

  num = num > len ?
    len :
    num

  if (typeof x === 'string') {
    return x.slice(len - num)
  }
  num = len - num

  return baseSlice(x, num, len)
}
