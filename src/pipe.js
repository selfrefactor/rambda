import { compose } from './compose'

export function pipe(...fns) {
  return compose(...fns.reverse())
}
