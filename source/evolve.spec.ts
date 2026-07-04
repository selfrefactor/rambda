import { evolve } from './evolve'
import { pipe } from './pipe'

test('happy', () => {
  const rules = {
    foo: (x: number) => x + 1,
  }
  const input = {
    a: 1,
    foo: 2,
    nested: { bar: { z: 3 } },
  }
  const result = evolve(rules)(input)
  expect(result).toEqual({
    a: 1,
    foo: 3,
    nested: { bar: { z: 3 } },
  })
})

test('type test', () => {
  const input = {
    baz: 1,
    foo: 2,
    nested: {
      a: 1,
      bar: 3,
    },
  }
  const result = pipe(input,
    evolve({
      foo: (x: number) => x + 1,
    })
  )
  expectTypeOf(result.foo).toEqualTypeOf<number>()
  expectTypeOf(result.baz).toEqualTypeOf<number>()
  expectTypeOf(result.nested.a).toEqualTypeOf<number>()
  expect(result).toEqual({
    baz: 1,
    foo: 3,
    nested: { a: 1, bar: 3 },
  })
})
