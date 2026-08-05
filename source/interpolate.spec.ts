import { interpolate } from './interpolate'

test('happy', () => {
  const templateInput = 'foo {{x}} baz'
  const templateArguments = { x: 'led zeppelin' }
  const result = interpolate(templateInput)(templateArguments)
  expectTypeOf(result).toEqualTypeOf<string>()
  expect(result).toBe('foo led zeppelin baz')
})
