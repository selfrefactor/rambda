import {isTruthy} from './_internals/isTruthy'
import {type} from './type'

export function allFalse(...inputs) {
  let counter = 0
  while (counter < inputs.length) {
    const x = inputs[counter]

    if (type(x) === 'Function') {
      if (isTruthy(x())) {
        return false
      }
    } else if (isTruthy(x)) {
      return false
    }

    counter++
  }

  return true
}
