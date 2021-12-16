import {merge} from './merge'
import {type} from './type'

export function partialCurry(fn, input) {
  return rest => {
    if (type(fn) === 'Async') {
      return new Promise((resolve, reject) => {
        fn(merge(rest, input)).then(resolve).catch(reject)
      })
    }

    return fn(merge(rest, input))
  }
}
