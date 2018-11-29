import { match } from './match'

test('', () => {
  expect(match(/a./g)('foo bar baz')).toEqual([ 'ar', 'az' ])

  expect(match(/a./g)('foo')).toEqual([])

  expect(() => {
    match(/a./g, null)
  }).toThrow()
})
