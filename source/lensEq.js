import { curry } from './curry'
import { equals } from './equals'
import { view } from './view'

function lensEqFn(
  lens, target, input
){
  return equals(view(lens, input), target)
}

export const lensEq = curry(lensEqFn)
