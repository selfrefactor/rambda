import { is } from './is'
import { curry } from './curry.js'

function propIsFn(type, name, obj){
  return is(type, obj[ name ])
}

export const propIs = curry(propIsFn)
