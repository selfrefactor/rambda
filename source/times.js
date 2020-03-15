import { map } from './map'
import { range } from './range'

export function times(fn, n){
  if (arguments.length === 1) return _n => times(fn, _n)
  if (!Number.isInteger(n) || n < 0) throw new RangeError('n must be an integer')

  return map(fn, range(0, n))
}
