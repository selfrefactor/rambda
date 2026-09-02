import { sortByProps } from 'rambdax'

const list = [{ a: { b: 3 } }, { a: { b: 2 } }, { a: { b: 1 } }]

test('happy', () => {
  const result = sortByProps(['foo.bar', 'a.b'], list)
  expectTypeOf(result).toEqualTypeOf<{ a: { b: number } }[]>()
  expect(result).toEqual([
    { a: { b: 1 } },
    { a: { b: 2 } },
    { a: { b: 3 } },
  ])
})

test('curried', () => {
  const result = sortByProps(['foo.bar', 'a.b'])(list)
  expectTypeOf(result).toEqualTypeOf<{ a: { b: number } }[]>()
  expect(result).toEqual([
    { a: { b: 1 } },
    { a: { b: 2 } },
    { a: { b: 3 } },
  ])
})
