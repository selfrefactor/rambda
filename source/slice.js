import { curry } from './curry'

function sliceFn(
  fromIndex, toIndex, list
){
  return list.slice(fromIndex, toIndex)
}

export const slice = curry(sliceFn)
