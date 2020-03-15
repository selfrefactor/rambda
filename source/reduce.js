import { curry } from './curry'

function reduceFn(
  fn, acc, list
){
  return list.reduce(fn, acc)
}

export const reduce = curry(reduceFn)
