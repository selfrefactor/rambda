import curry from './internal/curry'

function sort (fn, arr) {
  const arrClone = arr.concat()

  return arrClone.sort(fn)
}

export default curry(sort)
