import { replaceAll } from './replaceAll.js'

const replacer = '|'
const patterns = [/foo/g, 'bar']
const input = 'foo bar baz foo bar'

test('happy', () => {
  const result = replaceAll(patterns, replacer)(input)
  const expected = '| | baz | bar'

  expect(result).toEqual(expected)
})
