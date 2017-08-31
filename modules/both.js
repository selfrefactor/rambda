import curry from './internal/curry'

function both (x, y) {
  return input => x(input) && y(input)
}

export default curry(both)
