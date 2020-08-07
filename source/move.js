import { curry } from "./curry"

function moveFn(fromIndex, toIndex, list){
  const clone = list.slice()
  
  clone[fromIndex] = list[toIndex]
  clone[toIndex] = list[fromIndex]

  return clone
}

export const move = curry(moveFn)