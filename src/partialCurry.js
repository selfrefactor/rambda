import merge from './merge'
import type from './type'

export default function partialCurry (fn, inputArguments = {}) {
  return inputArgumentsHolder => {
    if (type(fn) === 'Async' || type(fn) === 'Promise') {
      return new Promise((resolve, reject) => {
        fn(merge(inputArgumentsHolder, inputArguments))
          .then(resolve)
          .catch(reject)
      })
    }

    return fn(merge(inputArgumentsHolder, inputArguments))
  }
}
