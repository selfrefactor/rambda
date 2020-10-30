import { tryCatch as tryCatchRamda } from 'ramda'

import { compareCombinations } from './_internals/testUtils'
import { prop } from './prop'
import { tryCatch } from './tryCatch'

test('happy', () => {
  const fn = () => {
    throw new Error('foo')
  }
  const result = tryCatch(fn, () => true)()
  expect(result).toBeTrue()
})

test('when fallback is used', () => {
  const fn = x => x.x

  expect(tryCatch(fn, false)(null)).toBeFalse()
})

test('with json parse', () => {
  const good = () => JSON.parse(JSON.stringify({ a : 1 }))
  const bad = () => JSON.parse('a{a')

  expect(tryCatch(good, 1)()).toEqual({ a : 1 })
  expect(tryCatch(bad, 1)()).toBe(1)
})

test('when fallback is function', () => {
  const fn = x => x.x

  expect(tryCatch(fn, () => 1)(null)).toBe(1)
})

test('when fn is used', () => {
  const fn = prop('x')

  expect(tryCatch(fn, false)({})).toBe(undefined)
  expect(tryCatch(fn, false)({ x : 1 })).toBe(1)
})

test('fallback receives error object and all initial inputs', () => {
  function thrower(
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

  const willThrow = tryCatch(thrower, catchFn)
  const result = willThrow(
    'A', 'B', 'C'
  )
  expect(result).toBe('throwerError|A|B|C')
})

test('fallback receives error object', () => {
  function throwFn(){
    throw new Error(10)
  }

  function eCatcher(
    e, a, b
  ){
    return e.message
  }

  const willThrow = tryCatch(throwFn, eCatcher)
  expect(willThrow([])).toBe('10')
  expect(willThrow([ {}, {}, {} ])).toBe('10')
})

const possibleFns = [
  null,
  () => 1,
  () => 0,
  () => JSON.parse('{a:1'),
  () => {
    const x = {}

    return x.x
  },
  x => x.foo,
  () => {
    throw new Error('foo')
  },
]

const possibleCatchers = [
  null,
  e => e.message.length,
  (e, ...inputs) => `${ e.message.length } ${ inputs.length }`,
  () => {
    throw new Error('bar')
  },
]

const possibleInputs = [ null, {}, { foo : 1 } ]

describe('brute force', () => {
  compareCombinations({
    returnsFunctionFlag : true,
    firstInput          : possibleFns,
    callback            : errorsCounters => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        Object {
          "ERRORS_MESSAGE_MISMATCH": 0,
          "ERRORS_TYPE_MISMATCH": 12,
          "RESULTS_MISMATCH": 0,
          "SHOULD_NOT_THROW": 0,
          "SHOULD_THROW": 7,
        }
      `)
    },
    secondInput : possibleCatchers,
    thirdInput  : possibleInputs,
    fn          : tryCatch,
    fnRamda     : tryCatchRamda,
  })
})
