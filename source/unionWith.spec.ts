import { unionWith } from './unionWith'
import { pipe } from './pipe'

test('happy', () => {
  const list1 = [{ a: 1, b: 1 }, { a: 2, b: 1 }]
  const list2 = [{ a: 2, b: 2 }, { a: 3, b: 2 }]
  const result = pipe(
    list2,
    unionWith((x, y) => {
      return x.a === y.a
    }, list1),
  )
  expect(result).toEqual([{ a: 1, b: 1 }, { a: 2, b: 1 }, { a: 3, b: 2 }])
})

test('type test', () => {
  const list = [{ a: 1, b: 1 }, { a: 2, b: 1 }]
  const result = pipe(
    list,
    unionWith((x, y) => {
      expectTypeOf(x.a).toEqualTypeOf<number>()
      expectTypeOf(y.b).toEqualTypeOf<number>()
      return x.a === y.a
    }, [{ a: 2, b: 2 }, { a: 3, b: 2 }]),
  )

  expectTypeOf(result[0].a).toEqualTypeOf<number>()
  expectTypeOf(result[0].b).toEqualTypeOf<number>()
  expect(result).toEqual([{ a: 2, b: 2 }, { a: 3, b: 2 }, { a: 1, b: 1 }])
})
