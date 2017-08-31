import curryThree from './internal/curryThree'

function ifElse (conditionFn, ifFn, elseFn) {
  return input => {
    if (conditionFn(input) === true) {
      return ifFn(input)
    }

    return elseFn(input)
  }
}

export default curryThree(ifElse)
