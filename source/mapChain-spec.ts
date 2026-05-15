import { mapChain, pipe } from 'rambda'
import { expectTypeOf, it } from 'vitest'

const list = [1, 2, 3]

it('R.mapChain', () => {
  const result = pipe(
    list,
    mapChain(
      x => {
        expectTypeOf(x).toEqualTypeOf<number>()
        return String(x)
      },
      x => {
        expectTypeOf(x).toEqualTypeOf<string>()
        return x !== 'foo'
      },
    ),
  )
  expectTypeOf(result).toEqualTypeOf<boolean[]>()
})

it('R.mapChain - with index', () => {
  const result = pipe(
    list,
    mapChain(
      x => {
        expectTypeOf(x).toEqualTypeOf<number>()
        return String(x)
      },
      (x, i) => {
        expectTypeOf(i).toEqualTypeOf<number>()
        expectTypeOf(x).toEqualTypeOf<string>()
        return x !== 'foo'
      },
    ),
  )
  expectTypeOf(result).toEqualTypeOf<boolean[]>()
})

it('R.mapChain - 3 functions', () => {
  const result = pipe(
    list,
    x => x,
    mapChain(
      x => {
        expectTypeOf(x).toEqualTypeOf<number>()
        return String(x)
      },
      x => {
        expectTypeOf(x).toEqualTypeOf<string>()
        return x !== 'foo'
      },
      x => {
        expectTypeOf(x).toEqualTypeOf<boolean>()
        return x ? 'foo' : 'bar'
      },
    ),
  )
  expectTypeOf(result).toEqualTypeOf<("foo" | "bar")[]>()
})
