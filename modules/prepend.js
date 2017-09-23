import curry from './internal/curry'

function prepend (val, arr) {
  if (typeof arr === 'string') {
    return `${ val }${ arr }`
  }
  const clone = arr.concat()
  clone.unshift(val)

  return clone
}

export default curry(prepend)
