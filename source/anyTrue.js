import { isTruthy } from './_internals/isTruthy.js'

export function anyTrue(...inputs){
  let counter = 0
  while (counter < inputs.length){
    if (isTruthy(inputs[ counter ])){
      return true
    }
    counter++
  }

  return false
}
