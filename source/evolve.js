import { mapArray, mapObject } from './map'
import { type } from './type'

export function evolveArray(rules, list){
  if (!list){
    return {}
  }

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

export function evolveObject(rules, input){
  const inputType = type(input)
  if (inputType !== 'Object') return {}

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
  }, input)
}

export function evolve(rules, input){
  if (arguments.length === 1){
    return _input => evolve(rules, _input)
  }
  const rulesType = type(rules)
  if (rulesType === 'Array') return evolveArray(rules, input)
  if (rulesType === 'Object') return evolveObject(rules, input)
  const inputType = type(input)

  if (inputType === 'Array'){
    if (input.length > 0){
      throw new TypeError(`Cannot read property '0' of ${ rules }`)
    }

    return []
  }

  return {}
}
