import filter from './filter'

export default function all (condition, arr) {
  if (arr === undefined) {
    return arrHolder => all(condition, arrHolder)
  }

  return filter(condition, arr).length === arr.length
}
