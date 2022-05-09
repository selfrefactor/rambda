import { curry } from './curry.js'
import { equals } from './equals.js'
import { view } from './view.js'

function lensEqFn(
  lens, target, input
){
  return equals(view(lens, input), target)
}

export const lensEq = curry(lensEqFn)
