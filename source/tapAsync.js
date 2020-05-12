import { isPromise } from './isPromise'

export function tapAsync(fn, input){
  if (arguments.length === 1){
    return inputHolder => tapAsync(fn, inputHolder)
  }
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
