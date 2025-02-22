import { maybe } from './maybe.js'

const WHEN_IF = 'WHEN_IF'
const WHEN_ELSE = 'WHEN_ELSE'

test('prevent type error', () => {
  const x = 5
  const y = null
  const ifRule = x > 3

  const result = maybe(ifRule, WHEN_IF, () => y.a === 'foo')

  expect(result).toBe(WHEN_IF)
})

test('whenElse is a function', () => {
  const x = 2
  const y = { a: 1 }
  const ifRule = x > 3

  const result = maybe(ifRule, WHEN_IF, () => y.a === 'foo')

  expect(result).toBeFalsy()
})

test('whenIf', () => {
  const x = 5
  const ifRule = x > 3

  const result = maybe(ifRule, WHEN_IF, WHEN_ELSE)

  expect(result).toBe(WHEN_IF)
})

test('whenIf is a function', () => {
  const x = 5
  const ifRule = () => x > 3

  const result = maybe(ifRule, () => WHEN_IF, WHEN_ELSE)

  expect(result).toBe(WHEN_IF)
})

test('whenElse', () => {
  const x = 1
  const ifRule = x > 3

  const result = maybe(ifRule, WHEN_IF, WHEN_ELSE)

  expect(result).toBe(WHEN_ELSE)
})
