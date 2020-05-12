import { whereEq } from './whereEq'

test('when true', () => {
  const rule = { a : 1 }
  const input = {
    a : 1,
    b : 2,
  }

  const result = whereEq(rule, input)
  const expectedResult = true

  expect(result).toEqual(expectedResult)
})

test('when false', () => {
  const rule = { a : 1 }
  const input = { b : 2 }

  const result = whereEq(rule, input)
  const expectedResult = false

  expect(result).toEqual(expectedResult)
})

test('with nested object', () => {
  const rule = { a : { b : 1 } }
  const input = {
    a : { b : 1 },
    c : 2,
  }

  const result = whereEq(rule)(input)
  const expectedResult = true

  expect(result).toEqual(expectedResult)
})

test('with wrong input', () => {
  const rule = { a : { b : 1 } }
  const input = null

  const result = whereEq(rule)(input)

  expect(result).toEqual(false)
})
