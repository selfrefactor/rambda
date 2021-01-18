import { memoize } from './memoize'

test('memoize function without input arguments', () => {
  const fn = () => 4
  const memoized = memoize(fn)
  expect(typeof memoized()).toBe('function')
})

test('happy', () => {
  let counter = 0

  const fn = ({ a, b, c }) => {
    counter++

    return a + b - c
  }
  const memoized = memoize(fn)
  expect(memoized({
    a : 1,
    c : 3,
    b : 2,
  })).toBe(0)
  expect(counter).toBe(1)
  expect(memoized({
    c : 3,
    a : 1,
    b : 2,
  })).toBe(0)
  expect(counter).toBe(1)
})

test('normal function', () => {
  let counter = 0
  const fn = (a, b) => {
    counter++

    return a + b
  }
  const memoized = memoize(fn)
  expect(memoized(1, 2)).toBe(3)
  expect(memoized(1, 2)).toBe(3)
  expect(memoized(1, 2)).toBe(3)
  expect(counter).toBe(1)
  expect(memoized(2, 2)).toBe(4)
  expect(counter).toBe(2)
  expect(memoized(1, 2)).toBe(3)
  expect(counter).toBe(2)
})

test('async function', async () => {
  let counter = 0
  const delay = ms =>
    new Promise(resolve => {
      setTimeout(resolve, ms)
    })
  const fn = async (
    ms, a, b
  ) => {
    await delay(ms)
    counter++

    return a + b
  }

  const memoized = memoize(fn)
  expect(await memoized(
    100, 1, 2
  )).toBe(3)
  expect(await memoized(
    100, 1, 2
  )).toBe(3)
  expect(await memoized(
    100, 1, 2
  )).toBe(3)
  expect(counter).toBe(1)
  expect(await memoized(
    100, 2, 2
  )).toBe(4)
  expect(counter).toBe(2)
  expect(await memoized(
    100, 1, 2
  )).toBe(3)
  expect(counter).toBe(2)
})

test('string as argument', () => {
  let count = 0
  const foo = 'foo'
  const tester = memoize(n => {
    count++

    return `${ n }bar`
  })
  tester(foo)
  tester(foo)
  tester(foo)

  expect(tester(foo)).toEqual('foobar')

  expect(count).toEqual(1)

  tester('baz')

  expect(tester('baz')).toEqual('bazbar')

  expect(count).toEqual(2)
})
