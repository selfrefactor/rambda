import compose from './compose'

export default function pipe (...fns) {
  return compose(...fns.reverse())
}
