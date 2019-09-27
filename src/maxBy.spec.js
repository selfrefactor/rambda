import { maxBy } from './maxBy'

test('1', () => {
  expect(maxBy(Math.round, 0.66, 0.77)).toEqual(0.66)
})

test('2', () => {
  expect(maxBy(Math.round, 0.77, 0.66)).toEqual(0.77)
})

test('3', () => {
  expect(maxBy(Math.round)(0.77, 0.66)).toEqual(0.77)
})

test('4', () => {
  expect(maxBy(Math.round, 0.77)(0.66)).toEqual(0.77)
})

test('5', () => {
  expect(maxBy(x => x === 1 ? -1 : 1, 1, 0.66)).toEqual(0.66)
})
