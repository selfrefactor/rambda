export async function mapFastAsyncFn(fn, arr){
  const promised = arr.map((a, i) => fn(a, i))

  return Promise.all(promised)
}

export function mapFastAsync(fn, arr){
  if (arguments.length === 1){
    return async holder => mapFastAsyncFn(fn, holder)
  }

  return new Promise((resolve, reject) => {
    mapFastAsyncFn(fn, arr)
      .then(resolve)
      .catch(reject)
  })
}
