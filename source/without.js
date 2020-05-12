import { includes } from './includes'
import { reduce } from './reduce'

export function without(matchAgainst, source){
  if (source === undefined){
    return _source => without(matchAgainst, _source)
  }

  return reduce(
    (prev, current) =>
      includes(current, matchAgainst) ? prev : prev.concat(current),
    [],
    source
  )
}
