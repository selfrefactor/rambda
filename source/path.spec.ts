import { path } from './path'
import { pipe } from './pipe'

test('happy', () => {
  const input = { a: { b: { c: true } } }
  const result = pipe(input, path(['a', 'b']))
	expectTypeOf(result).toEqualTypeOf<{ c: boolean }>()
  expect(result).toEqual({ c: true })
})
