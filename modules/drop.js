import curry from './internal/curry'

function drop (dropNumber, a) {
  return a.slice(dropNumber)
}

export default curry(drop)
