function filterObject (fn, obj) {
  const willReturn = {}

  for (const prop in obj) {
    if (fn(obj[ prop ], prop)) {
      willReturn[ prop ] = obj[ prop ]
    }
  }

  return willReturn
}

export default function filter (fn, arr) {
  if (arr === undefined) {
    return arrHolder => filter(fn, arrHolder)
  }

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
