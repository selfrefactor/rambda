import { isFalsy } from './_internals/isFalsy.js'

export function anyFalse(...inputs){
  let counter = 0
  while (counter < inputs.length){
    if (isFalsy(inputs[ counter ])){
      return true
    }
    counter++
  }

  return false
}
