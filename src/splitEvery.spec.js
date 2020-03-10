import { splitEvery } from './splitEvery'

test('happy', () => {
  expect(splitEvery(3, [ 1, 2, 3, 4, 5, 6, 7 ])).toEqual([
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7 ],
  ])

  expect(splitEvery(3)('foobarbaz')).toEqual([ 'foo', 'bar', 'baz' ])
})

test('with bad input', () => {
  expect(() => expect(splitEvery(0)('foo')).toEqual([ 'f', 'o', 'o' ])).toThrow('First argument to splitEvery must be a positive integer')

})
