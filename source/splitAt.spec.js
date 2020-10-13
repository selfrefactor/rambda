import { splitAt as splitAtRamda } from 'ramda'

import { splitAt } from './splitAt'

const list = [ 1, 2, 3 ]
const str = 'foo bar'

test('with array', () => {
  const result = splitAt(2, list)
  expect(result).toEqual([ [ 1, 2 ], [ 3 ] ])
})

test('with array - index is negative number', () => {
  const result = splitAt(-6, list)
  expect(result).toEqual([ [], list ])
})

test('with array - index is out of scope', () => {
  const result = splitAt(4, list)
  expect(result).toEqual([ [ 1, 2, 3 ], [] ])
})

test('with string', () => {
  const result = splitAt(4, str)
  expect(result).toEqual([ 'foo ', 'bar' ])
})

test('with string - index is negative number', () => {
  const result = splitAt(-2, str)
  expect(result).toEqual([ 'foo b', 'ar' ])
})

test('with string - index is out of scope', () => {
  const result = splitAt(10, str)
  expect(result).toEqual([ str, '' ])
})

test('with array - index is out of scope', () => {
  const result = splitAt(4)(list)
  expect(result).toEqual([ [ 1, 2, 3 ], [] ])
})

const badInputs = [ 1, true, /foo/g, {} ]
const throwingBadInputs = [ null, undefined ]

test('with bad inputs', () => {
  throwingBadInputs.forEach(badInput => {
    expect(() => splitAt(1, badInput)).toThrowWithMessage(TypeError,
      `Cannot read property 'slice' of ${ badInput }`)
    expect(() => splitAtRamda(1, badInput)).toThrowWithMessage(TypeError,
      `Cannot read property 'slice' of ${ badInput }`)
  })

  badInputs.forEach(badInput => {
    const result = splitAt(1, badInput)
    const ramdaResult = splitAtRamda(1, badInput)
    expect(result).toEqual(ramdaResult)
  })
})
