import { type } from './type'

export function composeAsync(...inputArguments){
  return async function (startArgument){
    let argumentsToPass = startArgument

    while (inputArguments.length !== 0){
      const fn = inputArguments.pop()
      const typeFn = type(fn)

      if (typeFn === 'Async'){
        argumentsToPass = await fn(argumentsToPass)
      } else {
        argumentsToPass = fn(argumentsToPass)
        if (type(argumentsToPass) === 'Promise'){
          argumentsToPass = await argumentsToPass
        }
      }
    }

    return argumentsToPass
  }
}
