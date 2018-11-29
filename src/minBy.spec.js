import { minBy } from './minBy'

test('', () => {
  expect(minBy(Math.round, 0.66, 0.77)).toEqual(0.66)
})

test('', () => {
  expect(minBy(Math.round, 0.77, 0.66)).toEqual(0.77)
})

test('', () => {
  expect(minBy(Math.round)(0.77, 0.66)).toEqual(0.77)
})

test('', () => {
  expect(minBy(Math.round, 0.77)(0.66)).toEqual(0.77)
})

test('', () => {
  expect(minBy(x => x === 1 ? -1 : 1, 1, 0.66)).toEqual(1)
})
