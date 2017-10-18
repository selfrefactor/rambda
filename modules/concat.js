import curry from './internal/curry'

function concat (x, y) {

  return typeof x === 'string' ? `${x}${y}` : [...x, ...y]
}

export default curry(concat)
