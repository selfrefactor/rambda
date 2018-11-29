import { splitEvery } from './splitEvery'

test('', () => {
  expect(splitEvery(3, [ 1, 2, 3, 4, 5, 6, 7 ])).toStrictEqual([
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7 ],
  ])

  expect(splitEvery(3)('foobarbaz')).toStrictEqual([ 'foo', 'bar', 'baz' ])

  expect(splitEvery(0)('foo')).toStrictEqual([ 'f', 'o', 'o' ])
})
