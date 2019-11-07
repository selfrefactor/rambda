import { findLast } from './findLast'

test('', () => {
  expect(
    findLast(x => x > 1, [ 1, 1, 1, 2, 3, 4, 1 ])
  ).toEqual(4)

  expect(
    findLast(x => x === 0, [ 0, 1, 1, 2, 3, 4, 1 ])
  ).toEqual(0)
})

test('with curry', () => {
  expect(
    findLast(x => x > 1)([ 1, 1, 1, 2, 3, 4, 1 ])
  ).toEqual(4)
})
