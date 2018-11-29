import { reverse } from './reverse'

test('', () => {
  expect(reverse([ 1, 2, 3 ])).toStrictEqual([ 3, 2, 1 ])
})

test('it doesn\'t mutate', () => {
  const arr = [ 1, 2, 3 ]

  expect(reverse(arr)).toStrictEqual([ 3, 2, 1 ])

  expect(arr).toStrictEqual([ 1, 2, 3 ])
})
