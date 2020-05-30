import { _isArray } from './_internals/_isArray'
import { filter } from './filter'
import { mapAsync } from './mapAsync'

export function filterAsync(predicate, listOrObject){
  if (arguments.length === 1){
    return async holder => filterAsync(predicate, holder)
  }

  return new Promise((resolve, reject) => {
    mapAsync(predicate, listOrObject)
      .then(predicateResult => {
        if (_isArray(predicateResult)){
          const filtered = listOrObject.filter((_, i) => predicateResult[ i ])

          return resolve(filtered)
        }
        const filtered = filter((_, prop) => predicateResult[ prop ],
          listOrObject)

        return resolve(filtered)
      })
      .catch(reject)
  })
}
