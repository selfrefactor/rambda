import { curry } from './curry'
import { equals } from './equals'

function eqPropsFn(
  prop, obj1, obj2
){
  if (!obj1 || !obj2){
    throw new Error('wrong object inputs are passed to R.eqProps')
  }

  return equals(obj1[ prop ], obj2[ prop ])
}

export const eqProps = curry(eqPropsFn)
