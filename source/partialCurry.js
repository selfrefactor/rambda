import { mergeRight } from './mergeRight.js'
import { type } from './type.js'

export function partialCurry(fn, input){
  return rest => {
    if (type(fn) === 'Async'){
      return new Promise((resolve, reject) => {
        fn(mergeRight(rest, input)).then(resolve)
          .catch(reject)
      })
    }

    return fn(mergeRight(rest, input))
  }
}
