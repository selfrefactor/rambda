import { renameProps } from './renameProps.js'

test('renameProps', () => {
  const rules = {
    b : 'bar',
    f : 'foo',
    q : 'x',
  }
  const input = {
    a : 3,
    b : 2,
    f : 1,
  }
  const result = renameProps(rules, input)
  const expectedResult = {
    a   : 3,
    bar : 2,
    foo : 1,
  }
  expect(result).toEqual(expectedResult)
})

test('curry', () => {
  const rules = {
    b : 'bar',
    f : 'foo',
  }
  const input = {
    b : 2,
    f : 1,
  }
  const result = renameProps(rules)(input)
  const expectedResult = {
    bar : 2,
    foo : 1,
  }
  expect(result).toEqual(expectedResult)
})
