import { remove } from './remove.js'

test('happy', () => {
  const inputs = [/foo/, /not\shere/, /also/, 'bar']
  const text = 'foo bar baz foo'

  const result = remove(inputs)(text)
  const expectedResult = 'baz foo'

  expect(result).toEqual(expectedResult)
})

test('with single rule', () => {
  const inputs = /foo/g
  const text = 'foo bar baz foo'

  const result = remove(inputs)(text)
  const expectedResult = ' bar baz '

  expect(result).toEqual(expectedResult)
})
