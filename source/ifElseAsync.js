function createThenable(x){
  return async function (input){
    return x(input)
  }
}

export function ifElseAsync(
  condition, ifFn, elseFn
){
  return input =>
    new Promise((resolve, reject) => {
      const conditionPromise = createThenable(condition)
      const ifFnPromise = createThenable(ifFn)
      const elseFnPromise = createThenable(elseFn)

      conditionPromise(input)
        .then(conditionResult => {
          const promised =
            conditionResult === true ? ifFnPromise : elseFnPromise

          promised(input).then(resolve)
            .catch(reject)
        })
        .catch(reject)
    })
}
