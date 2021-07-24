import { _isArray } from './_internals/_isArray'

export function filterObject(predicate, obj, indexed = false){
  const willReturn = {}

  for (const prop in obj){
    const predicateResult = indexed ?
      predicate(obj[ prop ], prop) :
      predicate(obj[ prop ])

    if (predicateResult){
      willReturn[ prop ] = obj[ prop ]
    }
  }

  return willReturn
}

export function filterArray(
  predicate, list, indexed = false
){
  let index = 0
  const len = list.length
  const willReturn = []

  while (index < len){
    const predicateResult = indexed ?
      predicate(list[ index ], index) :
      predicate(list[ index ])
    if (predicateResult){
      willReturn.push(list[ index ])
    }

    index++
  }

  return willReturn
}

export function filter(predicate, iterable){
  if (arguments.length === 1){
    return _iterable => filter(predicate, _iterable)
  }
  if (!iterable) return []
  if (_isArray(iterable)) return filterArray(predicate, iterable)

  return filterObject(predicate, iterable)
}
