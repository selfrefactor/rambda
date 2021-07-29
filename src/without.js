import {reduce} from './reduce'
import {_indexOf} from './indexOf'

export function without(matchAgainst, source) {
  if (source === undefined) {
    return _source => without(matchAgainst, _source)
  }

  return reduce(
    (prev, current) =>
      _indexOf(current, matchAgainst) > -1 ? prev : prev.concat(current),
    [],
    source
  )
}
