import { values } from './values'

test('values', () => {
  expect(
    values({
      a : 1,
      b : 2,
      c : 3,
    })
  ).toEqual([ 1, 2, 3 ])
})
