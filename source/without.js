import { includesArray } from './includes'
import { reduce } from './reduce'

export function without(matchAgainst, source){
  if (source === undefined){
    return _source => without(matchAgainst, _source)
  }

  return reduce(
    (prev, current) =>
    includesArray(current, matchAgainst) ? prev : prev.concat(current),
    [],
    source
  )
}
