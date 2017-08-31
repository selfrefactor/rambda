import curry from './internal/curry'

function findIndex (fn, arr) {
  const length = arr.length
  let index = -1

  while (++index < length) {
    if (fn(arr[ index ])) {
      return index
    }
  }

  return -1
}

export default curry(findIndex)
