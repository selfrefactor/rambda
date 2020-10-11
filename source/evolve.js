import { _isArray } from './_internals/_isArray'
import { mapArray, mapObject } from './map'
import { type } from './type'

export function evolveArray(rules, list){
  return mapArray(
    (x, i) => {
      if (type(rules[ i ]) === 'Function'){
        return rules[ i ](x)
      }

      return x
    },
    list,
    true
  )
}

export function evolveObject(rules, iterable){
  return mapObject((x, prop) => {
    if (type(x) === 'Object'){
      const typeRule = type(rules[ prop ])
      if (typeRule === 'Function'){
        return rules[ prop ](x)
      }
      if (typeRule === 'Object'){
        return evolve(rules[ prop ], x)
      }

      return x
    }
    if (type(rules[ prop ]) === 'Function'){
      return rules[ prop ](x)
    }

    return x
  }, iterable)
}

export function evolve(rules, iterable){
  if (arguments.length === 1){
    return _iterable => evolve(rules, _iterable)
  }
  const rulesType = type(rules)
  const iterableType = type(iterable)
  console.log(rulesType, iterableType)

  if (iterableType !== rulesType){
    if ([ iterableType, rulesType ].includes('Object')){
      if (iterableType === 'Object'){
        if (![ 'Null', 'Undefined' ].includes(rulesType)) return iterable
        if (Object.keys(iterable).length === 0) return {}

        throw new TypeError(`Cannot read property '${ Object.keys(iterable)[ 0 ] }' of ${ rules }`)
      }
    }

    if ([ iterableType, rulesType ].includes('Array')){
      if ([ 'Number', 'Undefined', 'Array' ].includes(rulesType)){
        return {}
      }
      if (rulesType === 'Null'){
        throw new TypeError(`Cannot read property '0' of ${ rules }`)
      }
      throw new TypeError(`Cannot read property '0' of ${ iterable }`)
    }

    return {}
  }

  if (![ 'Object', 'Array' ].includes(rulesType)){
    if (iterableType === 'Array'){
      if (iterable.length > 0){
        throw new TypeError(`Cannot read property '0' of ${ rules }`)
      }

      return []
    }

    return {}
  }

  if (iterableType === 'Object'){
    return evolveObject(rules, iterable)
  }

  return evolveArray(rules, iterable)
}
