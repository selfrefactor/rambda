import { equals } from './equals'

export function lastIndexOf(x, arr) {
  if (arguments.length === 1) {
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
