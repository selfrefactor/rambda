function mapObject(fn, obj){
  const willReturn = {}

  for (const prop in obj){
    willReturn[ prop ] = fn(
      obj[ prop ], prop, obj
    )
  }

  return willReturn
}

export function map(fn, list){
  if (arguments.length === 1) return _list => map(fn, _list)

  if (list === undefined){
    return []
  }
  if (!Array.isArray(list)){
    return mapObject(fn, list)
  }

  let index = -1
  const len = list.length
  const willReturn = Array(len)

  while (++index < len){
    willReturn[ index ] = fn(list[ index ], index)
  }

  return willReturn
}
