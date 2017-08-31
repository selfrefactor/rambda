import curry from './internal/curry'

function dropLast (dropNumber, a) {
  return a.slice(0, -dropNumber)
}

export default curry(dropLast)
