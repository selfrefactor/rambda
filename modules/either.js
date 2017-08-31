import curry from './internal/curry'

function either (x, y) {
  return input => x(input) || y(input)
}

export default curry(either)
