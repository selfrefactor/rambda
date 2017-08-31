import curry from './internal/curry'

function append (val, arr) {
  const clone = arr.concat()
  clone.push(val)

  return clone
}

export default curry(append)
