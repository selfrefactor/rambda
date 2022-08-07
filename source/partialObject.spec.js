import { delay } from './delay.js'
import { partialObject } from './partialObject.js'
import { type } from './type.js'

test('with plain function', () => {
  const fn = ({ a, b, c }) => a + b + c
  const curried = partialObject(fn, { a : 1 })

  expect(type(curried)).toBe('Function')
  expect(curried({
    b : 2,
    c : 3,
  })).toBe(6)
})

test('with function that throws an error', () => {
  const fn = ({ a, b, c }) => {
    throw new Error('foo')
  }
  const curried = partialObject(fn, { a : 1 })

  expect(type(curried)).toBe('Function')
  expect(() =>
    curried({
      b : 2,
      c : 3,
    })).toThrowErrorMatchingInlineSnapshot('"foo"')
})

test('with async', async () => {
  const fn = async ({ a, b, c }) => {
    await delay(100)

    return a + b + c
  }

  const curried = partialObject(fn, { a : 1 })

  const result = await curried({
    b : 2,
    c : 3,
  })

  expect(result).toBe(6)
})

test('async function throwing an error', async () => {
  const fn = async ({ a, b, c }) => {
    await delay(100)
    throw new Error('foo')
  }

  const curried = partialObject(fn, { a : 1 })

  try {
    await curried({
      b : 2,
      c : 3,
    })
    expect(true).toBeFalsy()
  } catch (e){
    expect(e.message).toBe('foo')
  }
})
