function filterObject(fn, obj){
  const willReturn = {}

  for (const prop in obj){
    if (fn(
      obj[ prop ], prop, obj
    )){
      willReturn[ prop ] = obj[ prop ]
    }
  }

  return willReturn
}

export function filter(fn, list){
  if (arguments.length === 1) return _list => filter(fn, _list)

  if (!list) return []

  if (!Array.isArray(list)){
    return filterObject(fn, list)
  }

  let index = -1
  let resIndex = 0
  const len = list.length
  const willReturn = []

  while (++index < len){
    const value = list[ index ]

    if (fn(value, index)){
      willReturn[ resIndex++ ] = value
    }
  }

  return willReturn
}
