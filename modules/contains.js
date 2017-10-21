import equals from './equals'

export default function contains (x, arr) {
  if (arr === undefined) {
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
