import { objectIncludes } from './objectIncludes.js'

test('when true', () => {
  const condition = { a: 1 }
  const input = {
    a: 1,
    b: 2,
  }

  const result = objectIncludes(condition)(input)
  const expectedResult = true

  expect(result).toEqual(expectedResult)
})

test('when false', () => {
  const condition = { a: 1 }
  const input = { b: 2 }

  const result = objectIncludes(condition)(input)
  const expectedResult = false

  expect(result).toEqual(expectedResult)
})

test('with nested object', () => {
  const condition = { a: { b: 1 } }
  const input = {
    a: { b: 1 },
    c: 2,
  }

  const result = objectIncludes(condition)(input)
  const expectedResult = true

  expect(result).toEqual(expectedResult)
})

test('with wrong input', () => {
  const condition = { a: { b: 1 } }

  expect(() => objectIncludes(condition)(null)).toThrowErrorMatchingInlineSnapshot(
    `[TypeError: Cannot read properties of null (reading 'a')]`,
  )
})
