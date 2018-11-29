import { pluck } from './pluck'

test('', () => {
  expect(pluck('a')([ { a : 1 }, { a : 2 } ])).toStrictEqual([ 1, 2 ])
})

test('with number', () => {
  const input = [ [ 1, 2 ], [ 3, 4 ] ]

  expect(pluck(0, input)).toStrictEqual([ 1, 3 ])
})
