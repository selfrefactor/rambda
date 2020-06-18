import { isFunction } from './isFunction'
import { isPromise } from './isPromise'

export function tryCatch(fn, fallback){
  if (!isFunction(fn)){
    throw new Error(`R.tryCatch | fn '${ fn }'`)
  }
  const passFallback = isFunction(fallback)

  if (!isPromise(fn)){
    return (...inputs) => {
      try {
        return fn(...inputs)
      } catch (e){
        return passFallback ? fallback(e, ...inputs) : fallback
      }
    }
  }

  return (...inputs) =>
    new Promise(resolve => {
      fn(...inputs)
        .then(resolve)
        .catch(() => {
          if (!passFallback){
            return resolve(fallback)
          }

          if (!isPromise(fallback)){
            return resolve(fallback(...inputs))
          }

          fallback(...inputs).then(resolve)
        })
    })
}
