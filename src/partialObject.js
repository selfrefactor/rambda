import { mergeDeepRight } from './mergeDeepRight.js'
import { type } from './type.js'

export function partialObject(fn, input){
  return rest => {
    if (type(fn) === 'Async'){
      return new Promise((resolve, reject) => {
        fn(mergeDeepRight(rest, input)).then(resolve)
          .catch(reject)
      })
    }

    return fn(mergeDeepRight(rest, input))
  }
}
