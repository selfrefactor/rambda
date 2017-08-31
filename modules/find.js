import curry from './internal/curry'

function find (fn, arr) {
  return arr.find(fn)
}

export default curry(find)
