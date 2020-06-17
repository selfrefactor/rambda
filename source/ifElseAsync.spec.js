import { delay } from './delay'
import { F } from './F'
import { ifElseAsync } from './ifElseAsync'
import { T } from './T'
import { type } from './type'

test('ok', async () => {
  const condition = async x => {
    const delayed = await delay(x * 80)

    return type(delayed) === 'String'
  }
  const conditionFalse = async x => {
    const delayed = await delay(x * 80)

    return type(delayed) === 'Array'
  }

  const ifFn = async x => {
    await delay(x * 60)

    return true
  }

  const elseFn = async x => {
    await delay(x * 60)

    return false
  }

  const result = await ifElseAsync(
    condition, ifFn, elseFn
  )(7)

  const resultFalse = await ifElseAsync(
    conditionFalse, ifFn, elseFn
  )(7)

  expect(result).toBeTrue()
  expect(resultFalse).toBeFalse()
})

test('works with regular functions', async () => {
  const result = await ifElseAsync(
    async x => type(await delay(x * 80)) === 'String',
    T,
    F
  )(7)

  expect(result).toEqual(true)
})
