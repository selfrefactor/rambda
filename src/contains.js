import { equals } from './equals'

export function contains(x, arr) {
  if (arguments.length === 1) {
    return arrHolder => contains(x, arrHolder)
  }

  let index = -1
  let flag = false

  while (++index < arr.length && !flag) {
    if (equals(arr[ index ], x)) {
      flag = true
    }
  }

  return flag
}
