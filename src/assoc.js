import { curry } from './curry'

function assocFn(
  prop, val, obj
){
  return Object.assign(
    {}, obj, { [ prop ] : val }
  )
}

export const assoc = curry(assocFn)
