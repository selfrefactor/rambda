import filter from './filter'
import curry from './internal/curry'

function all (condition, arr) {
  return filter(condition, arr).length === arr.length
}

export default curry(all)
