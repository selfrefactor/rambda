import curry from './internal/curry'
import equals from './equals'

function contains (val, arr) {
  let index = -1
  let flag = false
  while (++index < arr.length && !flag) {
    if (equals(arr[ index ], val)) {
      flag = true
    }
  }

  return flag
}

export default curry(contains)
