export default function ifElse (condition, ifFn, elseFn) {
  if (ifFn === undefined) {
    return (ifFnHolder, elseFnHolder) => ifElse(condition, ifFnHolder, elseFnHolder)
  } else if (elseFn === undefined) {
    return elseFnHolder => ifElse(condition, ifFn, elseFnHolder)
  }

  return input => {
    const conditionResult = typeof condition === 'boolean' ?
      condition :
      condition(input)

    if (conditionResult === true) {
      return ifFn(input)
    }

    return elseFn(input)
  }
}
