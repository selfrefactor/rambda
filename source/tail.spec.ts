import { tail } from './tail'


test('happy', () => {
	expectTypeOf(tail('foo')).toEqualTypeOf<string>()
  expectTypeOf(tail(['foo', 'bar', 1, 2, 3])).toEqualTypeOf<(string | number)[]>()
  expect(tail('abc')).toBe('bc')
	expect(tail([])).toEqual([])
	expect(tail('')).toBe('')
})
