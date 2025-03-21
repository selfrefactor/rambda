import { findNth } from './findNth.js'

const list = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }]

test('happy', () => {
  const fn = x => x.a > 1
  expect(findNth(fn,1)(list)).toEqual({ a: 3 })
})

test('nothing is found', () => {
	const fn = x => x.a > 4
	expect(findNth(fn,1)(list)).toBeUndefined()
})