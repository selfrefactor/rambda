import { maybe } from './maybe'

const whenIf = 7
const whenElse = 9

test('prevent type error', () => {
  const x = 5
  const y = null
  const ifRule = x > 3

  const result = maybe(
    ifRule,
    whenIf,
    () => y.a === 'foo'
  )
  const expectedResult = 7

  expect(result).toEqual(expectedResult)
})

test('function as whenElse', () => {
  const x = 2
  const y = { a : 1 }
  const ifRule = x > 3

  const result = maybe(
    ifRule,
    whenIf,
    () => y.a === 'foo'
  )
  const expectedResult = false

  expect(result).toEqual(expectedResult)
})

test('when if', () => {
  const x = 5
  const ifRule = x > 3

  const result = maybe(
    ifRule, whenIf, whenElse
  )
  const expectedResult = 7

  expect(result).toEqual(expectedResult)
})

test('when else', () => {
  const x = 1
  const ifRule = x > 3

  const result = maybe(
    ifRule, whenIf, whenElse
  )
  const expectedResult = 9

  expect(result).toEqual(expectedResult)
})
