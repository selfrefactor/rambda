import { sortByPath } from './sortByPath'
import { pipe } from './pipe'

const list = [{ a: { b: 3 } }, { a: { b: 1 } }, { a: { b: 2 } }]
const sorted = [{ a: { b: 1 } }, { a: { b: 2 } }, { a: { b: 3 } }]

test('happy', () => {
  const input = [{ a: { b: 2 } }, { a: { b: 1 } }]
  const result = pipe(input, sortByPath('a.b'))
  expectTypeOf(result[0].a.b).toEqualTypeOf<number>()
  expect(result[0].a.b).toBe(1)
})

test('with string as path', () => {
  expect(pipe(list, sortByPath('a.b'))).toEqual(sorted)
})

test('with list of strings as path', () => {
  expect(pipe(list, sortByPath(['a', 'b']))).toEqual(sorted)
})

test('when path is not found in any item', () => {
  const list = [{ a: { b: 3 } }, { a: { b: 1 } }, { a: {} }]
	// @ts-expect-error	
	pipe(list, sortByPath('a.b.c.d'))
})
