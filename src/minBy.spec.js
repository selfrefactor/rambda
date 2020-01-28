import { minBy } from './minBy'

test('1', () => {
  expect(minBy(
    Math.round, 0.66, 0.77
  )).toEqual(0.66)
})

test('2', () => {
  expect(minBy(
    Math.round, 0.77, 0.66
  )).toEqual(0.77)
})

test('3', () => {
  expect(minBy(Math.round)(0.77, 0.66)).toEqual(0.77)
})

test('4', () => {
  expect(minBy(Math.round, 0.77)(0.66)).toEqual(0.77)
})

test('5', () => {
  expect(minBy(
    x => x === 1 ? -1 : 1, 1, 0.66
  )).toEqual(1)
})
