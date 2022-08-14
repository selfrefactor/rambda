export async function mapAllSettledFn(fn, arr){
  const promised = arr.map((a, i) => fn(a, i))

  return Promise.allSettled(promised)
}

export function mapAllSettled(fn, arr){
  if (arguments.length === 1){
    return async holder => mapAllSettledFn(fn, holder)
  }

  return new Promise((resolve, reject) => {
    mapAllSettledFn(fn, arr).then(resolve)
      .catch(reject)
  })
}
