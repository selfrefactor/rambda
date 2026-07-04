import { replaceAll } from './replaceAll'
import { pipe } from './pipe'

const replacer = '|'
const patterns = [/foo/g, 'bar']
const input = 'foo bar baz foo bar'

test('happy', () => {
  const result = replaceAll(patterns, replacer)(input)
  expect(result).toEqual('| | baz | bar')
})

test('type test', () => {
  const str = 'foo bar foo'
  const result = pipe(str, replaceAll([/foo/g, 'bar'], 'bar'))
  expectTypeOf(result).toEqualTypeOf<string>()
  expect(result).toBe('bar bar bar')
})
