import { curry } from './curry'

function updateFn(
  index, newValue, list
){
  const arrClone = list.slice()
  
  if (-1===index) return arrClone.fill(newValue, index) 
    
  return arrClone.fill(
    newValue, index, index + 1
  )
}

export const update = curry(updateFn)
