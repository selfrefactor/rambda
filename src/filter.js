function filterObject(fn, obj) {
  const willReturn = {}

  for (const prop in obj) {
    if (fn(obj[ prop ], prop)) {
      willReturn[ prop ] = obj[ prop ]
    }
  }

  return willReturn
}

export function filter(fn, arr) {
  if (arguments.length === 1) {
    return arrHolder => filter(fn, arrHolder)
  }

  if (arr === undefined) {
    return []
  }

  if (!Array.isArray(arr)) {
    return filterObject(fn, arr)
  }

  let index = -1
  let resIndex = 0
  const len = arr.length
  const willReturn = []

  while (++index < len) {
    const value = arr[ index ]

    if (fn(value, index)) {
      willReturn[ resIndex++ ] = value
    }
  }

  return willReturn
}
