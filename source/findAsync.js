import { isArray } from './_internals/isArray.js'
import { mapAsync } from './mapAsync.js'

export function findAsyncFn(predicate, list){
  return new Promise((resolve, reject) => {
    let canContinue = true
    let found

    const predicateFn = async (x, i) => {
      if (!canContinue) return false
      try {
        const result = await predicate(x, i)
        if (result){
          canContinue = false
          found = x
        }
      } catch (error){
        reject(error)
      }
    }

    mapAsync(predicateFn, list)
      .then(() => resolve(found))
      .catch(reject)
  })
}

export function findAsync(predicate, list){
  if (arguments.length === 1){
    return async _list => findAsync(predicate, _list)
  }

  return new Promise((resolve, reject) => {
    findAsyncFn(predicate, list).then(resolve)
      .catch(reject)
  })
}
