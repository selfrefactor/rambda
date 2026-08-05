import { prepend } from './prepend'

test('happy', () => {
  const result = prepend('yes')(['foo', 'bar', 'baz'])
  expectTypeOf(result).toEqualTypeOf<string[]>()
  expect(result).toEqual(['yes', 'foo', 'bar', 'baz'])
})

test('with empty list', () => {
  expect(prepend('foo')([])).toEqual(['foo'])
})
