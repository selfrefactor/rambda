import { update } from './update'

test('update', () => {
  expect(update(1)(0)([ 1, 2, 3 ])).toStrictEqual([ 1, 0, 3 ])
  expect(update(1, 11, [ 0, 1, 2 ])).toStrictEqual([ 0, 11, 2 ])
})
