import { isFunction } from './isFunction'
import { isPromise } from './isPromise'

export function tryCatchAsync(fn, fallback){
  return (...inputs) =>
    new Promise(resolve => {
      fn(...inputs)
        .then(resolve)
        .catch(err => {
          // console.log(1) this is not decorated
          console.log(1)
          if (!isFunction(fallback)){
            console.log(12)
            return resolve(fallback)
          }
          if (!isPromise(fallback)){
            console.log(124)
            return resolve(fallback(err, ...inputs))
          }
          console.log(1245)
          
          fallback(err, ...inputs).then(resolve).catch(resolve) 
        })
    })
}
