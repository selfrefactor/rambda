import { curry } from './curry.js'
import { is } from './is'

function propIsFn(
  type, name, obj
){
  return is(type, obj[ name ])
}

export const propIs = curry(propIsFn)
