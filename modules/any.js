import curry from './internal/curry'

function any (fn, arr) {
  let counter = 0
  while (counter < arr.length) {
    if (fn(arr[ counter ])) {
      return true
    }
    counter++
  }

  return false
}

export default curry(any)
