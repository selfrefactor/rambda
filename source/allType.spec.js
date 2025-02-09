import { allType } from './allType.js'

test('when true', () => {
  const result = allType('Array')([1, 2, 3], [], [null])

  expect(result).toBeTrue()
})

test('when false', () => {
  const result = allType('String')(1, undefined, null, [])

  expect(result).toBeFalse()
})
