import { equals } from './equals'
import { type } from './type'

function flagIs(targetType, input){
  if (!input) return false
  if (type(input) !== targetType) return false

  if (targetType === 'Array') return !equals([], input)
  if (targetType === 'Object') return !equals({}, input)

  return true
}

export function defaultToStrict(defaultArgument,
  ...inputArguments){
  if (arguments.length === 1){
    return inputArgumentsHolder =>
      defaultToStrict(defaultArgument, inputArgumentsHolder)
  }
  if (arguments.length === 2){
    return flagIs(type(defaultArgument), inputArguments[ 0 ]) ?
      inputArguments[ 0 ] :
      defaultArgument
  }

  const targetType = type(defaultArgument)
  const limit = inputArguments.length - 1
  let len = limit + 1
  let ready = false
  let holder

  while (!ready){
    const instance = inputArguments[ limit - len + 1 ]

    if (len === 0){
      ready = true
    } else if (flagIs(targetType, instance)){
      holder = instance
      ready = true
    } else {
      len -= 1
    }
  }

  return holder === undefined ? defaultArgument : holder
}
