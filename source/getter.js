import { merge } from './merge'
import { pick } from './pick'
import { type } from './type'

let holder = {}

/**
 * Pass string to get value
 * Pass array to get object of values
 * Pass undefined to get all data
 */
export function getter(key){
  const typeKey = type(key)

  if (typeKey === 'String') return holder[ key ]

  if (typeKey === 'Array') return pick(key, holder)

  return holder
}

export function setter(maybeKey, maybeValue){
  const typeKey = type(maybeKey)
  const typeValue = type(maybeValue)

  if (typeKey === 'String'){
    if (typeValue === 'Function'){
      return holder[ maybeKey ] = maybeValue(holder[ maybeKey ])
    }

    return holder[ maybeKey ] = maybeValue
  }

  if (typeKey !== 'Object') return

  holder = merge(holder, maybeKey)
}

export function reset(){
  holder = {}
}
