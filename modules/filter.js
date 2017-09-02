import curry from './internal/curry'

function filterObject (fn, obj) {
  const willReturn = {}
  for (const prop in obj) {
    if (fn(obj[ prop ])) {
      willReturn[ prop ] = obj[ prop ]
    }
  }

  return willReturn
}

function filter (fn, arr) {
  if (arr.length === undefined) {
    return filterObject(fn, arr)
  }
  let index = -1
  let resIndex = 0
  const len = arr.length
  const willReturn = []

  while (++index < len) {
    const value = arr[ index ]
    if (fn(value)) {
      willReturn[ resIndex++ ] = value
    }
  }

  return willReturn
}

export default curry(filter)
