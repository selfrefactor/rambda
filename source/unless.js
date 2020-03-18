import { isFunction } from './isFunction'

export function unless(condition, whenFalse){
  if (arguments.length === 1){
    return whenFalseHolder => unless(condition, whenFalseHolder)
  }

  return input => {
    const flag = typeof condition === 'boolean' ?
      condition :
      condition(input)

    if (flag) return input

    if (isFunction(whenFalse)) return whenFalse(input)

    return whenFalse
  }
}
