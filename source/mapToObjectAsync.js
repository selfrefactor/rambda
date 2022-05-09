import { mapAsync } from './mapAsync.js'

export async function mapToObjectAsyncFn(fn, list){
  let toReturn = {}

  const innerIterable = async x => {
    const intermediateResult = await fn(x)
    if (intermediateResult === false) return
    toReturn = {
      ...toReturn,
      ...intermediateResult,
    }
  }

  await mapAsync(innerIterable, list)

  return toReturn
}

export function mapToObjectAsync(fn, list){
  if (arguments.length === 1){
    return async _list => mapToObjectAsyncFn(fn, _list)
  }

  return new Promise((resolve, reject) => {
    mapToObjectAsyncFn(fn, list).then(resolve)
      .catch(reject)
  })
}
