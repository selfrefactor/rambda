import { mapFastAsync, mapFastAsyncFn } from './mapFastAsync'
import { splitEvery } from './splitEvery'

async function mapAsyncLimitFn(
  iterable, limit, list
){
  if (list.length < limit) return mapFastAsync(iterable, list)

  const slices = splitEvery(limit, list)

  let toReturn = []
  for (const slice of slices){
    const iterableResult = await mapFastAsyncFn(iterable, slice)
    toReturn = [ ...toReturn, ...iterableResult ]
  }

  return toReturn
}

export function mapAsyncLimit(
  iterable, limit, list
){
  if (arguments.length === 2){
    return async _list => mapAsyncLimitFn(
      iterable, limit, _list
    )
  }

  return new Promise((resolve, reject) => {
    mapAsyncLimitFn(
      iterable, limit, list
    ).then(resolve)
      .catch(reject)
  })
}
