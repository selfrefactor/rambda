import { splitWhen as splitWhenRamda } from 'ramda'

import { equals } from './equals.js'
import { splitWhen } from './splitWhen.js'

const list = [1, 2, 1, 2]

test('happy', () => {
  const result = splitWhen(equals(2), list)
  expect(result).toEqual([[1], [2, 1, 2]])
})

test('when predicate returns false', () => {
  const result = splitWhen(equals(3))(list)
  expect(result).toEqual([list, []])
})

const badInputs = [1, true, /foo/g, {}]
const throwingBadInputs = [null, undefined]

test('with bad inputs', () => {
  throwingBadInputs.forEach(badInput => {
    expect(() => splitWhen(equals(2), badInput)).toThrowError(
      TypeError,
      `Cannot read property 'length' of ${badInput}`,
    )
    expect(() => splitWhenRamda(equals(2), badInput)).toThrowError(
      TypeError,
      `Cannot read properties of ${badInput} (reading 'length')`,
    )
  })

  badInputs.forEach(badInput => {
    const result = splitWhen(equals(2), badInput)
    const ramdaResult = splitWhenRamda(equals(2), badInput)
    expect(result).toEqual(ramdaResult)
  })
})
