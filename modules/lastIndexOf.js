import equals from './equals'

export default function lastIndexOf (x, arr) {
  if (arr === undefined) {
    return arrHolder => lastIndexOf(x, arrHolder)
  }
  let willReturn = -1

  arr.map((value, key) => {
    if (equals(value, x)) {
      willReturn = key
    }
  })

  return willReturn
}
