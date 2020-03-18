import { allTrue } from './allTrue'

test('with functions', () => {
  const foo = () => 1
  const bar = () => false
  const baz = () => JSON.parse('{sda')
  const result = allTrue(
    foo, bar, baz
  )
  expect(result).toBe(false)
})

test('usage with non boolean', () => {
  const foo = { a : 1 }
  const baz = [ 1, 2, 3 ]

  const result = allTrue(
    foo, foo, baz
  )
  expect(result).toBe(true)
})

test('usage with boolean', () => {
  const foo = 4
  const baz = [ 1, 2, 3 ]

  const result = allTrue(foo > 2, baz.length === 3)
  expect(result).toBe(true)
})

test('escapes early - case 0', () => {
  const foo = undefined
  const result = allTrue(foo, () => foo.a)
  expect(result).toBe(false)
})

test('escapes early - case 1', () => {
  const foo = null
  const result = allTrue(foo, () => foo.a)
  expect(result).toBe(false)
})

test('escapes early - case 2', () => {
  const foo = { a : 'bar' }
  const result = allTrue(
    foo, foo.a, foo.a.b
  )
  expect(result).toBe(false)
})

test('escapes early - case 3', () => {
  const foo = { a : { b : 'foo' } }
  const result = allTrue(
    foo, () => foo.a, () => foo.a.b
  )
  expect(result).toBe(true)
})
