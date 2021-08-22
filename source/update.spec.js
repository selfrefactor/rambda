import {update} from './update'
import {update as updateRamda} from 'ramda'

const list = [1, 2, 3]

test('happy', () => {
  const newValue = 8
  const index = 1
  const result = update(index, newValue, list)
  const curriedResult = update(index, newValue)(list)
  const tripleCurriedResult = update(index)(newValue)(list)

  const expected = [1, 8, 3]
  expect(result).toEqual(expected)
  expect(curriedResult).toEqual(expected)
  expect(tripleCurriedResult).toEqual(expected)
})

test('list has no such index', () => {
  const newValue = 8
  const index = 10
  const result = update(index, newValue, list)

  expect(result).toEqual(list)
})

test('with negative index', () => {
  expect(
    update(-1, 10, [1])
  ).toEqual([10])
  expect(
    update(-1, 10, [])
  ).toEqual([])
  expect(
    update(-1, 10, list)
  ).toEqual([1,2,10])
  expect(
    update(-2, 10, list)
  ).toEqual([1,10,3])
  expect(
    update(-3, 10, list)
  ).toEqual([10,2,3])
})
