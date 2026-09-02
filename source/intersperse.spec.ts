import { intersperse } from './intersperse'

test('happy', () => {
  const result = intersperse('|')(['foo', 'bar'])
  expectTypeOf(result).toEqualTypeOf<string[]>()
  expect(result).toEqual(['foo', '|', 'bar'])
})