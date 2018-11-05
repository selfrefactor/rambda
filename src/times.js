import { range } from './range'
import { map } from './map'

export function times(fn, num) {
  if (arguments.length === 1)
    return numHolder => times(fn, numHolder)

  return map(fn, range(0, num))
}
