function createThenable(fn){
  return async function (...input){
    return fn(...input)
  }
}

export function ifElseAsync(
  condition, ifFn, elseFn
){
  return (...inputs) =>
    new Promise((resolve, reject) => {
      const conditionPromise = createThenable(condition)
      const ifFnPromise = createThenable(ifFn)
      const elseFnPromise = createThenable(elseFn)

      conditionPromise(...inputs)
        .then(conditionResult => {
          const promised =
            conditionResult === true ? ifFnPromise : elseFnPromise

          promised(...inputs)
            .then(resolve)
            .catch(reject)
        })
        .catch(reject)
    })
}
