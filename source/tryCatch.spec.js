import { prop } from './prop.js'
import { tryCatch } from './tryCatch.js'

test('happy', () => {
  const fn = () => {
    throw new Error('foo')
  }
  const result = tryCatch(fn, () => true)()
  expect(result).toBeTruthy()
})

test('when fallback is used', () => {
  const fn = x => x.x

  expect(tryCatch(fn, false)(null)).toBeFalsy()
})

test('with json parse', () => {
  const good = () => JSON.parse(JSON.stringify({ a: 1 }))
  const bad = () => JSON.parse('a{a')

  expect(tryCatch(good, 1)()).toEqual({ a: 1 })
  expect(tryCatch(bad, 1)()).toBe(1)
})

test('when fallback is function', () => {
  const fn = x => x.x

  expect(tryCatch(fn, () => 1)(null)).toBe(1)
})

test('when fn is used', () => {
  const fn = prop('x')

  expect(tryCatch(fn, false)({})).toBeUndefined()
  expect(tryCatch(fn, false)({ x: 1 })).toBe(1)
})

test('fallback receives error object and all initial inputs', () => {
  function thrower(a, b, c) {
    void c
    throw new Error('throwerError')
  }

  function catchFn(e, a, b, c) {
    return [e.message, a, b, c].join('|')
  }

  const willThrow = tryCatch(thrower, catchFn)
  const result = willThrow('A', 'B', 'C')
  expect(result).toBe('throwerError|A|B|C')
})

test('fallback receives error object', () => {
  function throwFn() {
    throw new Error(10)
  }

  function eCatcher(e, a, b) {
    return e.message
  }

  const willThrow = tryCatch(throwFn, eCatcher)
  expect(willThrow([])).toBe('10')
  expect(willThrow([{}, {}, {}])).toBe('10')
})
