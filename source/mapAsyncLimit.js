import { mapFastAsync, mapFastAsyncFn } from './mapFastAsync'
import { splitEvery } from './splitEvery'

export async function mapAsyncLimit(
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
