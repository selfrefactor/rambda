import { rejectIndexed } from './rejectIndexed.js'

test('with array', () => {
  expect(
    rejectIndexed((x, i) => {
  expect(typeof x).toBe('number')
  expect(typeof i).toBe('number')

      return x % 2 === 1
    })([1, 2, 3, 4]),
  ).toEqual([2, 4])
})

test('with object', () => {
  const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
  }
  expect(
    rejectIndexed((x, prop) => {
  expect(typeof x).toBe('number')
			expect(typeof prop).toBe('string')

      return x % 2 === 1
    }, obj),
  ).toEqual({
    b: 2,
    d: 4,
  })
})
