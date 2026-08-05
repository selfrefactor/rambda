import { init } from './init'
import { pipe } from './pipe'

test('happy', () => {
  expectTypeOf(init('foo')).toEqualTypeOf<string>()
  expect(init('foo')).toBe('fo')

  const result = pipe(['foo', 'bar', 1, 2, 3], init)
  expectTypeOf(result).toEqualTypeOf<(string | number)[]>()
  expect(result).toEqual(['foo', 'bar', 1, 2])
})

test('with array', () => {
  expect(init([1, 2, 3])).toEqual([1, 2])
  expect(init([1, 2])).toEqual([1])
  expect(init([1])).toEqual([])
  expect(init([])).toEqual([])
})

test('with string', () => {
  expect(init('foo')).toBe('fo')
  expect(init('f')).toBe('')
  expect(init('')).toBe('')
})
