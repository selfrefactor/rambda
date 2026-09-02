import { join } from './join'
import { pipe } from './pipe'

test('happy', () => {
  const result = pipe([1, 2, 3], join('|'))
  expectTypeOf(result).toEqualTypeOf<string>()
  expect(result).toBe('1|2|3')
})
