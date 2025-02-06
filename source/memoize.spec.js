import { memoize } from './memoize.js'

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
  expect(
    memoized({
      a: 1,
      c: 3,
      b: 2,
    }),
  ).toBe(0)
  expect(counter).toBe(1)
  expect(
    memoized({
      c: 3,
      a: 1,
      b: 2,
    }),
  ).toBe(0)
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
  const fn = async (ms, a, b) => {
    await delay(ms)
    counter++

    return a + b
  }

  const memoized = memoize(fn)
  await expect(memoized(100, 1, 2)).resolves.toBe(3)
  await expect(memoized(100, 1, 2)).resolves.toBe(3)
  await expect(memoized(100, 1, 2)).resolves.toBe(3)
  expect(counter).toBe(1)
  await expect(memoized(100, 2, 2)).resolves.toBe(4)
  expect(counter).toBe(2)
  await expect(memoized(100, 1, 2)).resolves.toBe(3)
  expect(counter).toBe(2)
})

test('string as argument', () => {
  let count = 0
  const foo = 'foo'
  const tester = memoize(n => {
    count++

    return `${n}bar`
  })
  tester(foo)
  tester(foo)
  tester(foo)

  expect(tester(foo)).toBe('foobar')

  expect(count).toBe(1)

  tester('baz')

  expect(tester('baz')).toBe('bazbar')

  expect(count).toBe(2)
})
