import curry from './internal/curry'

function repeat (a, num) {
  const willReturn = Array(num)

  return willReturn.fill(a)
}

export default curry(repeat)
