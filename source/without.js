import { includes } from './includes'
import { reduce } from './reduce'

export function without(matchAgainst, source){
  if (source === undefined){
    return _source => without(matchAgainst, _source)
  }

  return reduce(
    (accum, item) =>
      includes(item, matchAgainst) ? accum : accum.concat(item),
    [],
    source
  )
}
