import { match } from './match'

test('', () => {
  expect(match(/a./g)('foo bar baz')).toStrictEqual([ 'ar', 'az' ])

  expect(match(/a./g)('foo')).toStrictEqual([])

  expect(() => {
    match(/a./g, null)
  }).toThrow()
})
