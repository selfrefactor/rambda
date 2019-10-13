import { merge } from './merge'
import { type } from './type'

export function partialCurry(fn, args = {}){
  return rest => {
    if (type(fn) === 'Async' || type(fn) === 'Promise'){
      return new Promise((resolve, reject) => {
        fn(merge(rest, args))
          .then(resolve)
          .catch(reject)
      })
    }

    return fn(merge(rest, args))
  }
}
