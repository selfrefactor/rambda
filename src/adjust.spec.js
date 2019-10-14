import { add } from './add'
import { adjust } from './adjust'

const expectedResult = [ 0, 11, 2 ]

test('without curring', () => {
  expect(adjust(1,add(10), [ 0, 1, 2 ])).toEqual(expectedResult)
})

test('with curring type 1 1 1', () => {
  expect(adjust(1)(add(10))([ 0, 1, 2 ])).toEqual(expectedResult)
})

test('with curring type 1 2', () => {
  expect(adjust(1)(add(10), [ 0, 1, 2 ])).toEqual(expectedResult)
})

test('with curring type 2 1', () => {
  expect(adjust(1,add(10))([ 0, 1, 2 ])).toEqual(expectedResult)
})

test('with negative index', () => {
  expect(adjust(-2, add(10), [ 0, 1, 2 ])).toEqual(expectedResult)
})

test('ramda spec 1', () => {
  const result = adjust(2, add(1), [ 0, 1, 2, 3 ])
  const expected = [0, 1, 3, 3]
  expect(result).toEqual(expected)
})
