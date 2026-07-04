import { append } from './append'
import { prepend } from './prepend'
import { pipe } from './pipe'

const listOfNumbers = [1, 2, 3]

test('happy', () => {
  expect(append('tests')(['write', 'more'])).toEqual(['write', 'more', 'tests'])
})

test('append to empty array', () => {
  expect(append('tests')([])).toEqual(['tests'])
})

test('type test', () => {
  const result = pipe(listOfNumbers, append(4), prepend(0))
  expectTypeOf(result).toEqualTypeOf<number[]>()
  expect(result).toEqual([0, 1, 2, 3, 4])
})

test('with object', () => {
  const result = pipe([{ a: 1 }], append({ a: 10 }), prepend({ a: 20 }))
  expectTypeOf(result).toEqualTypeOf<{ a: number }[]>()
  expect(result).toEqual([{ a: 20 }, { a: 1 }, { a: 10 }])
})
