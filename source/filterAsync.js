import { mapAsync } from './mapAsync.js'
import { filter } from './filter.js'

export function filterAsync(predicate, iterateOver){
  if (arguments.length === 1){
    return async holder => filterAsync(predicate, holder)
  }

  return new Promise((resolve, reject) => {
    mapAsync(predicate, iterateOver)
      .then(predicateResult => {
        if (Array.isArray(predicateResult)){
          const filtered = iterateOver.filter((_, i) => predicateResult[ i ])

          return resolve(filtered)
        }
        const filtered = filter((_, prop) => predicateResult[ prop ])(iterateOver)

        return resolve(filtered)
      })
      .catch(reject)
  })
}
