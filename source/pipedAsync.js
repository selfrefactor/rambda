import { type } from './type'

export async function pipedAsync(...inputs){
  const [ input, ...fnList ] = inputs

  let argumentsToPass = input

  while (fnList.length !== 0){
    const fn = fnList.shift()
    const typeFn = type(fn)

    if (typeFn === 'Async'){
      argumentsToPass = await fn(argumentsToPass)
    } else {
      argumentsToPass = fn(argumentsToPass)
    }
  }

  return argumentsToPass
}
