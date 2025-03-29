import { interpolate } from './interpolate.js'
import { pipe } from './pipe.js'

test('happy', () => {
  const result = pipe(
		{ name: 'John', age: 30 },
		interpolate('My name is {{name}} and I am {{age}} years old')
	)
	expect(result).toBe('My name is John and I am 30 years old')
})