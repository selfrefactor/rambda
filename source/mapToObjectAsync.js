import { mapAsync } from './mapAsync'

export async function mapToObjectAsync(iterable, list){
  let toReturn = {}
  const innerIterable = async x => {
    const intermediateResult = await iterable(x)
    if (intermediateResult === false) return
    toReturn = {
      ...toReturn,
      ...intermediateResult,
    }
  }

  await mapAsync(innerIterable, list)

  return toReturn
}
