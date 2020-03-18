import { isFunction } from './isFunction'

export function when(condition, whenTrue){
  if (arguments.length === 1){
    return whenTrueHolder => when(condition, whenTrueHolder)
  }

  return input => {
    const flag = typeof condition === 'boolean' ?
      condition :
      condition(input)

    if (!flag) return input

    if (isFunction(whenTrue)) return whenTrue(input)

    return whenTrue
  }
}
