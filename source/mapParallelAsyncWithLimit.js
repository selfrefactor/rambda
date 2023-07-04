import { mapParallelAsync, mapParallelAsyncFn } from './mapParallelAsync.js'
import { splitEvery } from './splitEvery.js'

async function mapParallelAsyncWithLimitFn(
  iterable, limit, list
){
  if (list.length < limit) return mapParallelAsync(iterable, list)

  const slices = splitEvery(limit, list)

  let toReturn = []
  for (const slice of slices){
    const iterableResult = await mapParallelAsyncFn(iterable, slice)
    toReturn = [ ...toReturn, ...iterableResult ]
  }

  return toReturn
}

export function mapParallelAsyncWithLimit(
  iterable, limit, list
){
  if (arguments.length === 2){
    return async _list => mapParallelAsyncWithLimitFn(
      iterable, limit, _list
    )
  }

  return new Promise((resolve, reject) => {
    mapParallelAsyncWithLimitFn(
      iterable, limit, list
    )
      .then(resolve)
      .catch(reject)
  })
}
