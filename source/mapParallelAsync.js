export async function mapParallelAsyncFn(fn, arr){
  const promised = arr.map((a, i) => fn(a, i))

  return Promise.all(promised)
}

export function mapParallelAsync(fn, arr){
  if (arguments.length === 1){
    return async holder => mapParallelAsyncFn(fn, holder)
  }

  return new Promise((resolve, reject) => {
    mapParallelAsyncFn(fn, arr).then(resolve)
      .catch(reject)
  })
}
