import { replaceAll } from './replaceAll.js'

const replacer = '|'
const patterns = [ /foo/g, 'bar' ]
const input = 'foo bar baz foo bar'

test('happy', () => {
  const result = replaceAll(
    patterns, replacer, input
  )
  const expected = '| | baz | bar'

  expect(result).toEqual(expected)
})

test('throws when wrong patterns', () => {
  expect(() => replaceAll(
    {}, replacer, input
  )).toThrow()
})

test('throws when wrong input', () => {
  expect(() => replaceAll(
    patterns, replacer, []
  )).toThrow()
})

test('throws when wrong replacer', () => {
  expect(() => replaceAll(
    patterns, null, input
  )).toThrow()
})
