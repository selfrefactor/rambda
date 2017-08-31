import curry from './internal/curry'

function map (fn, arr) {
  let index = -1
  const length = arr.length
  const willReturn = Array(length)

  while (++index < length) {
    willReturn[ index ] = fn(arr[ index ])
  }

  return willReturn
}

export default curry(map)
