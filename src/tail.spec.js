import { tail } from './tail'

test('tail', () => {
  expect(tail([ 1, 2, 3 ])).toStrictEqual([ 2, 3 ])
  expect(tail([ 1, 2 ])).toStrictEqual([ 2 ])
  expect(tail([ 1 ])).toStrictEqual([])
  expect(tail([])).toStrictEqual([])

  expect(tail('abc')).toStrictEqual('bc')
  expect(tail('ab')).toStrictEqual('b')
  expect(tail('a')).toStrictEqual('')
  expect(tail('')).toStrictEqual('')
})
