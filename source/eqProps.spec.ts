import { eqProps } from './eqProps'
import { pipe } from './pipe'

const obj1 = {
  a: 1,
  b: 2,
}
const obj2 = {
  a: 1,
  b: 3,
}

test('happy', () => {
  const objA = { a: { b: 1 }, c: 2 }
  const objB = { a: { b: 1 }, c: 3 }
  const result = pipe(objA, eqProps('a', objB))
  expectTypeOf(result).toEqualTypeOf<boolean>()
  expect(result).toBe(true)
})

test('props are equal', () => {
  const result = eqProps('a', obj1)(obj2)
  expect(result).toBeTruthy()
})

test('props are not equal', () => {
  const result = eqProps('b', obj1)(obj2)
  expect(result).toBeFalsy()
})

test('prop does not exist', () => {
  const result = eqProps('c' as 'a' | 'b', obj1)(obj2)
  expect(result).toBeTruthy()
})
