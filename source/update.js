import { curry } from './curry'

function updateFn(
  index, newValue, list
){
  const arrClone = list.slice()

  return arrClone.fill(
    newValue, index, index + 1
  )
}

export const update = curry(updateFn)
