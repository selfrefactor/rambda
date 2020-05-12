import { curry } from './curry'

function reduceFn(
  reducer, acc, list
){
  const clone = list.slice()

  return clone.reduce(reducer, acc)
}

export const reduce = curry(reduceFn)
