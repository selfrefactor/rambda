import {curry} from './curry'
import {equals} from './equals'
import {prop} from './prop'

function eqPropsFn(property, objA, objB) {
  return equals(prop(property, objA), prop(property, objB))
}

export const eqProps = curry(eqPropsFn)
