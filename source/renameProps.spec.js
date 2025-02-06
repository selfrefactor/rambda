import { renameProps } from './renameProps.js'

test('renameProps', () => {
  const rules = {
    f: 'foo',
    b: 'bar',
    q: 'x',
  }
  const input = {
    f: 1,
    b: 2,
    a: 3,
  }
  const result = renameProps(rules, input)
  const expectedResult = {
    foo: 1,
    bar: 2,
    a: 3,
  }
  expect(result).toEqual(expectedResult)
})

test('curry', () => {
  const rules = {
    f: 'foo',
    b: 'bar',
  }
  const input = {
    f: 1,
    b: 2,
  }
  const result = renameProps(rules)(input)
  const expectedResult = {
    foo: 1,
    bar: 2,
  }
  expect(result).toEqual(expectedResult)
})
