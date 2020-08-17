import { delay } from './delay'
import { equals } from './equals'
import { map } from './map'
import { pipeAsync } from './pipeAsync'

async function identity(x){
  await delay(100)

  return x
}

test('happy', async () => {
  const fn1 = async x => {
    await delay(100)

    return x.map(xx => xx + 1)
  }
  const fn2 = async x => {
    await delay(100)

    return x.map(xx => xx * 2)
  }
  const result = await pipeAsync(fn1,
    fn2)(await Promise.all([ identity(1), identity(2), identity(3) ]))

  expect(result).toEqual([ 4, 6, 8 ])
})

const delayFn = ms =>
  new Promise(resolve => {
    resolve(ms + 1)
  })

test('with function returning promise', async () => {
  const result = await pipeAsync(
    x => x,
    x => x + 1,
    delayFn,
    x => x
  )(1)

  expect(result).toEqual(3)
})

test('throw error', async () => {
  const fn = async () => {
    await delay(1)
    JSON.parse('{foo')
  }

  let didThrow = false
  try {
    await pipeAsync(x => x, fn)(20)
  } catch (e){
    didThrow = true
  }

  expect(didThrow).toBeTrue()
})
