import { isArray } from './_internals/isArray.js'

async function mapAsyncFn(fn, listOrObject){
  if (isArray(listOrObject)){
    const willReturn = []
    let i = 0
    for (const a of listOrObject){
      willReturn.push(await fn(a, i++))
    }

    return willReturn
  }

  const willReturn = {}
  for (const prop in listOrObject){
    willReturn[ prop ] = await fn(listOrObject[ prop ], prop)
  }

  return willReturn
}

export function mapAsync(fn, listOrObject){
  if (arguments.length === 1){
    return async _listOrObject => mapAsyncFn(fn, _listOrObject)
  }

  return new Promise((resolve, reject) => {
    mapAsyncFn(fn, listOrObject).then(resolve)
      .catch(reject)
  })
}
