import { replaceAll } from './replaceAll'
import { pipe } from './pipe'

test('happy', () => {
  const str = 'foo bar foo'
  const result = pipe(str, replaceAll([/foo/g, 'bar'], 'bar'))
  expectTypeOf(result).toEqualTypeOf<string>()
  expect(result).toBe('bar bar bar')
})
