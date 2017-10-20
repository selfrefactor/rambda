import filter from './filter'

function all (condition, arr) {
  return filter(condition, arr).length === arr.length
}

export default curry(all)
