import { isPromise } from './isPromise'

function tapAsyncFn(fn, input){
  if (isPromise(fn) === true){
    return new Promise((resolve, reject) => {
      fn(input)
        .then(() => {
          resolve(input)
        })
        .catch(reject)
    })
  }
  fn(input)

  return input
}

export function tapAsync(fn, input){
  if (arguments.length === 1){
    return async _input => tapAsyncFn(fn, _input)
  }

  return new Promise((resolve, reject) => {
    tapAsyncFn(fn, input).then(resolve)
      .catch(reject)
  })
}
