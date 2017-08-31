import curry from './internal/curry'

function tap (fn, input) {
  fn(input)

  return input
}

export default curry(tap)
