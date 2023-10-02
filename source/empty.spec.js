import { empty } from 'ramda'

test('returns empty array given array', () => {
  expect(empty([ 1, 2, 3 ])).toEqual([])
})

test('returns empty array of equivalent type given typed array', () => {
  expect(empty(Uint8Array.from('123'))).toEqual(Uint8Array.from(''))
  expect(empty(Uint8Array.from('123')).constructor.name).toBe('Uint8Array')
  expect(empty(new Float32Array([ 1, 2, 3 ]))).toEqual(new Float32Array([]))
  expect(empty(new Float32Array([ 1, 2, 3 ])).constructor.name).toBe('Float32Array')
})

test('returns empty string given string', () => {
  expect(empty('abc')).toBe('')
  expect(empty(new String('abc'))).toBe('')
})

test('other types', () => {
  expect(empty({ a : 1 })).toEqual({})
  expect(empty(/foo/g)).toBeUndefined()
})
