import { filter } from './filter.js'
import { includes } from './includes.js'

export function symmetricDifference(x) {
  return y => [
    ...filter(value => !includes(value)(y))(x),
    ...filter(value => !includes(value)(x))(y),
  ]
}
