import { findLastIndex } from './findLastIndex'

test('', () => {
  expect(
    findLastIndex(x => x > 1, [ 1, 1, 1, 2, 3, 4, 1 ])
  ).toEqual(5)

  expect(
    findLastIndex(x => x === 0, [ 0, 1, 1, 2, 3, 4, 1 ])
  ).toEqual(0)
})

test('with curry', () => {
  expect(
    findLastIndex(x => x > 1)([ 1, 1, 1, 2, 3, 4, 1 ])
  ).toEqual(5)
})
