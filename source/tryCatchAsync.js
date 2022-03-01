import { type } from './type.js'

export function tryCatchAsync(fn, fallback){
  return (...inputs) =>
    new Promise(resolve => {
      fn(...inputs)
        .then(resolve)
        .catch(err => {
          if (type(fallback) !== 'Function'){
            return resolve(fallback)
          }
          if (type(fallback) !== 'Promise'){
            return resolve(fallback(err, ...inputs))
          }

          fallback(err, ...inputs)
            .then(resolve)
            .catch(resolve)
        })
    })
}
