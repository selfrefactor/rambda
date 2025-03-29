import { take } from './take.js'

export function zipWith(fn, x) {
  return y =>
    take(x.length > y.length ? y.length : x.length)(x).map((xInstance, i) =>
      fn(xInstance, y[i]),
    )
}
