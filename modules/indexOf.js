import curry from './internal/curry'

function indexOf (x, arr) {
  let index = -1
  const length = arr.length

  while (++index < length) {
    if (arr[ index ] === x) {
      return index
    }
  }

  return -1
}

export default curry(indexOf)
