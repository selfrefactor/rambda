import { add } from './add'
import { adjust } from './adjust'

const expectedResult = [ 0, 11, 2 ]

test('without curring', () => {
  expect(adjust(add(10), 1, [ 0, 1, 2 ])).toEqual(expectedResult)
})

test('with curring type 1 1 1', () => {
  expect(adjust(add(10))(1)([ 0, 1, 2 ])).toEqual(expectedResult)
})

test('with curring type 1 2', () => {
  expect(adjust(add(10))(1, [ 0, 1, 2 ])).toEqual(expectedResult)
})

test('with curring type 2 1', () => {
  expect(adjust(add(10), 1)([ 0, 1, 2 ])).toEqual(expectedResult)
})

test('with negative index', () => {
  expect(adjust(add(10), -2, [ 0, 1, 2 ])).toEqual(expectedResult)
})
