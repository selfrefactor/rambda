import { isFunction } from './isFunction'

export function when(rule, resultOrFunction){
  if (arguments.length === 1){
    return whenTrueHolder => when(rule, whenTrueHolder)
  }

  return input => {
    if (!rule(input)) return input

    return isFunction(resultOrFunction) ?
      resultOrFunction(input) :
      resultOrFunction
  }
}
