import { merge } from './merge.js'
import { type } from './type.js'

export function partialCurry(fn, input){
  return rest => {
    if (type(fn) === 'Async'){
      return new Promise((resolve, reject) => {
        fn(merge(rest, input)).then(resolve)
          .catch(reject)
      })
    }

    return fn(merge(rest, input))
  }
}
