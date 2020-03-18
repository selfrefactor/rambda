import { remove } from './remove'

test('happy', () => {
  const inputs = [ /foo/, /not\shere/, /also/, 'bar' ]
  const text = 'foo bar baz foo'

  const result = remove(inputs)(text)
  const expectedResult = 'baz foo'

  expect(result).toEqual(expectedResult)
})

test('with strings + curry', () => {
  const inputs = [ 'foo', 'bar' ]
  const text = 'foo bar baz foo'

  const result = remove(inputs)(text)
  const expectedResult = 'baz foo'

  expect(result).toEqual(expectedResult)
})

test('with strings and regex', () => {
  const inputs = [ /foo/g, 'bar' ]
  const text = 'foo bar baz foo'

  const result = remove(inputs, text)
  const expectedResult = 'baz'

  expect(result).toEqual(expectedResult)
})

test('text is not string', () => {
  const inputs = [ /foo/g, 'bar' ]
  const text = null

  expect(() => remove(inputs, text)).toThrow()
})

test('with regexes', () => {
  const inputs = [ /foo/g, /bar/ ]
  const text = 'foo bar baz foo'

  const result = remove(inputs, text)
  const expectedResult = 'baz'

  expect(result).toEqual(expectedResult)
})

test('with single rule', () => {
  const inputs = /foo/g
  const text = 'foo bar baz foo'

  const result = remove(inputs, text)
  const expectedResult = 'bar baz'

  expect(result).toEqual(expectedResult)
})
