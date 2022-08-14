import { type } from './type.js'

export function pipeAsync(...inputArguments){
  return async function (startArgument){
    let argumentsToPass = startArgument

    while (inputArguments.length !== 0){
      const fn = inputArguments.shift()

      argumentsToPass = fn(argumentsToPass)
      if (type(argumentsToPass) === 'Promise'){
        argumentsToPass = await argumentsToPass
      }
    }

    return argumentsToPass
  }
}
