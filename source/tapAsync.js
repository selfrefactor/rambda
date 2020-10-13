async function tapAsyncFn(fn, input){
  await fn(input)

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
