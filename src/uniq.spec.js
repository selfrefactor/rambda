import { uniq } from './uniq'

test('uniq', () => {
  expect(uniq([ 1, 2, 3, 3, 3, 1, 2, 0 ])).toStrictEqual([ 1, 2, 3, 0 ])
  expect(uniq([ 1, 1, 2, 1 ])).toStrictEqual([ 1, 2 ])
  expect([ 1, '1' ]).toStrictEqual([ 1, '1' ])
  expect(uniq([ [ 42 ], [ 42 ] ])).toStrictEqual([ [ 42 ] ])
})
