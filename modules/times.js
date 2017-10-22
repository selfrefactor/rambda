import range from './range'
import map from './map'

export default function times (fn, num) {
  if (num === undefined) {
    return numHolder => times(fn, numHolder)
  }

  return map(
    fn,
    range(0, num)
  )
}
