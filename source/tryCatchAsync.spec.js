import { delay } from './delay'
import { prop } from './prop'
import { tryCatchAsync } from './tryCatchAsync'

test('when fallback is function', async () => {
  const fn = async x => x.x

  const result = await tryCatchAsync(fn, () => 1)(null)
  expect(result).toBe(1)
})

test('fallback is not used', async () => {
  const fn = async x => x.x

  expect(tryCatchAsync(fn, false)({ x : 1 })).resolves.toBe(1)
})


test('fallback receives error object and all initial inputs', async () => {
  async function thrower(
    a, b, c
  ){
    void c
    throw new Error('throwerError')
  }

  function catchFn(
    e, a, b, c
  ){
    return [ e.message, a, b, c ].join('|')
  }

  const willThrow = tryCatchAsync(thrower, catchFn)
  const result = await willThrow(
    'A', 'B', 'C'
  )
  expect(result).toBe('throwerError|A|B|C')
})

test('when async + value fallback', async () => {
  const fn = async () => {
    await delay(100)

    return JSON.parse('{a:')
  }

  const result = await tryCatchAsync(fn, 'fallback')(100)
  expect(result).toBe('fallback')
})


