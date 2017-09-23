import curry from './internal/curry'

function append (val, arr) {
  if (typeof arr === 'string') {
    return `${ arr }${ val }`
  }
  const clone = arr.concat()
  clone.push(val)

  return clone
}

export default curry(append)
