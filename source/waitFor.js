import { delay } from './delay.js'
import { range } from './range.js'
import { type } from './type.js'

export function waitFor(
  condition, howLong, loops = 10
){
  const typeCondition = type(condition)

  const passPromise = typeCondition === 'Promise'
  const passFunction = typeCondition === 'Function'
  const interval = Math.floor(howLong / loops)

  if (!(passPromise || passFunction)){
    throw new Error('R.waitFor')
  }

  return async (...inputs) => {
    for (const _ of range(0, loops)){
      const resultCondition = await condition(...inputs)

      if (resultCondition === false){
        await delay(interval)
      } else {
        return resultCondition
      }
    }

    return false
  }
}
