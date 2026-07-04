import { interpolate } from './interpolate'
import { pipe } from './pipe'

test('happy', () => {
  const result = pipe(
    { name: 'John', age: 30 },
    interpolate('My name is {{name}} and I am {{age}} years old')
  )
  expect(result).toBe('My name is John and I am 30 years old')
})

test('type test', () => {
  const templateInput = 'foo {{x}} baz'
  const templateArguments = { x: 'led zeppelin' }
  const result = interpolate(templateInput)(templateArguments)
  expectTypeOf(result).toEqualTypeOf<string>()
  expect(result).toBe('foo led zeppelin baz')
})
