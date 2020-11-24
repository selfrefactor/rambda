import { isFunction } from './isFunction'
import { isPromise } from './isPromise'

export function tryCatchAsync(fn, fallback){
  return (...inputs) =>
    new Promise(resolve => {
      fn(...inputs)
        .then(resolve)
        .catch(err => {
          if (!isFunction(fallback)){
            return resolve(fallback)
          }
          if (!isPromise(fallback)){
            return resolve(fallback(err, ...inputs))
          }
          
          fallback(err, ...inputs).then(resolve).catch(resolve) 
        })
    })
}
