import { sortObject } from './sortObject'
import { pipe } from './pipe'

test('happy', () => {
  const obj = { c: 7, a: 100, b: 1, d: 4 }
  const predicate = (a: string, b: string, aValue: number, bValue: number) => {
    if (a === 'a') return -1
    if (b === 'a') return 1
    return aValue > bValue ? -1 : 1
  }
  const result = sortObject(predicate)(obj)
  expect(result).toEqual({ a: 100, c: 7, d: 4, b: 1 })
})

test('type test', () => {
  const result = pipe({ c: 1, a: 2, b: 3 }, sortObject((propA, propB) => propA > propB ? -1 : 1))
  expectTypeOf(result).toEqualTypeOf<{ c: number; a: number; b: number }>()
})
