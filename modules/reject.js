import curry from './internal/curry'
import filter from './filter'

function reject(predicate, collection) {
  return filter((x) => !predicate(x), collection)
}


export default curry(reject)
