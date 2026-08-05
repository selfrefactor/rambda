import { modifyProp } from './modifyProp'
import { pipe } from './pipe'


test('happy', () => {
  const result = pipe({ a: 1, b: 2, c: { d: 3 } }, modifyProp('a', val => val + 1))
  expectTypeOf(result).toEqualTypeOf<{ a: number; b: number; c: { d: number } }>()
  expect(result).toEqual({ a: 2, b: 2, c: { d: 3 } })
})

test('property is missing', () => {
	const person = { name: 'foo', age: 20 }
	
	expect(modifyProp<typeof person, 'age'>('foo' as 'age', (x: number) => x + 1)(person)).toEqual(person)
})

test('adjust if `array` at the given key', () => {
  expect(modifyProp<number[], 1>(1, (x: number) => x + 1)([100, 1400])).toEqual([100, 1401])
})
