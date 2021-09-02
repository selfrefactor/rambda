import {isFalsy} from './_internals/isFalsy'
import {type} from './type'

export function anyFalse(...inputs) {
  let counter = 0
  while (counter < inputs.length) {
    const x = inputs[counter]

    if (type(x) === 'Function') {
      if (isFalsy(x())) {
        return true
      }
    } else if (isFalsy(x)) {
      return true
    }

    counter++
  }

  return false
}
