import { isTruthy } from './_internals/isTruthy.js'
import { type } from './type.js'

export function anyTrue(...inputs){
  let counter = 0
  while (counter < inputs.length){
    const x = inputs[ counter ]

    if (type(x) === 'Function'){
      if (isTruthy(x())){
        return true
      }
    } else if (isTruthy(x)){
      return true
    }

    counter++
  }

  return false
}
