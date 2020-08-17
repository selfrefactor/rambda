import { composeAsync } from './composeAsync'
import { delay } from './delay'
import { equals } from './equals'
import { map } from './map'
import { mapAsync } from './mapAsync'
import { prop } from './prop'
import { tapAsync } from './tapAsync'

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
  const result = await composeAsync(fn1,
    fn2)(await Promise.all([ identity(1), identity(2), identity(3) ]))

  expect(result).toEqual([ 3, 5, 7 ])
})

const delayFn = ms =>
  new Promise(resolve => {
    resolve(ms + 1)
  })

test.only('bug - with function returning promise', async () => {
  const result = await composeAsync(
    x => x,
    x => x + 1,
    delayFn,
    x => x
  )(1)
  console.log(result)
  // expect(result).toEqual(3)
})

test('throw error', async () => {
  const delay = async () => {
    await delayFn(1)
    JSON.parse('{foo')
  }

  let flag = true
  try {
    await composeAsync(
      a => a,
      a => a + 1000,
      async () => delay(),
      a => a + 11
    )(20)
  } catch (e){
    flag = false
  }

  expect(flag).toBeFalse()
})
