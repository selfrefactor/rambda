import { maxBy } from './maxBy'

test('', () => {
  expect(
    maxBy(Math.round, 0.66,0.77)
  ).toEqual(0.66)
})

test('', () => {
  expect(
    maxBy(Math.round, 0.77,0.66)
  ).toEqual(0.77)
})