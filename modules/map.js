import curry from './internal/curry'

function mapObject (fn, obj) {
  const willReturn = {}
  for (const prop in obj) {
    willReturn[ prop ] = fn(obj[ prop ])
  }

  return willReturn
}

function map (fn, arr) {
  if (arr.length === undefined) {
    return mapObject(fn, arr)
  }
  let index = -1
  const length = arr.length
  const willReturn = Array(length)

  while (++index < length) {
    willReturn[ index ] = fn(arr[ index ])
  }

  return willReturn
}

export default curry(map)
