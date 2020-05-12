import { composeAsync } from './composeAsync'
import { delay as delayModule } from './delay'
import { equals } from './equals'
import { map } from './map'
import { mapAsync } from './mapAsync'
import { prop } from './prop'
import { tapAsync } from './tapAsync'

test('1', async () => {
  const fn = input =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve({
          type    : 'result',
          payload : input,
        })
      }, 100)
    })

  const list = [ 'foo', 'bar' ].map(a => fn(a))

  const result = await composeAsync(
    map(prop('payload')),
    async inputs => Promise.all(inputs.map(async input => fn(input))),
    map(prop('payload'))
  )(await Promise.all(list))

  expect(result).toEqual([ 'foo', 'bar' ])
})

test('2', async () => {
  const delay = ms =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(ms + 110)
      }, ms)
    })

  const delayAsync = async ms => delay(ms)

  const result = await composeAsync(
    a => a - 1000,
    a => a,
    async a => delayAsync(a),
    a => a + 11
  )(await delay(20))
  expect(result).toEqual(-749)
})

test('3', async () => {
  try {
    const delay = ms =>
      new Promise((_, reject) => {
        setTimeout(() => {
          reject('error')
        }, ms)
      })

    const delayAsync = async ms => delay(ms)

    await composeAsync(a => a - 1000, delayAsync)(20)
  } catch (err){
    expect(err).toEqual('error')
  }
})

test('4', async () => {
  let sideEffect
  const result = await composeAsync(tapAsync(async x => {
    sideEffect = equals(x, [ 2, 4, 6 ])

    return delayModule(x * 3)
  }),
  mapAsync(async x => {
    await delayModule(x * 100)

    return x * 2
  }))([ 1, 2, 3 ])

  expect(result).toEqual([ 2, 4, 6 ])

  expect(sideEffect).toEqual(true)
})

test('inside compose explicit `async` keyword', async () => {
  const delay = ms =>
    new Promise((res, rej) => {
      const b = ms + 7

      res(b)
    })

  const result = await composeAsync(
    a => a,
    a => a + 1000,
    async a => delay(a),
    a => a + 11
  )(20)

  expect(result).toEqual(1038)
})

const delayFn = ms =>
  new Promise((res, rej) => {
    const b = ms + 7

    res(b)
  })

test('known issue - function returning promise', async () => {
  const result = await composeAsync(
    a => a,
    a => a + 1000,
    delayFn,
    a => a + 11
  )(20)

  expect(result).toEqual('[object Promise]1000')
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

  expect(flag).toBe(false)
})
