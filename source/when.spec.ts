import { head } from './head'
import { pipe } from './pipe'
import { tap } from './tap'
import { when } from './when'

const predicate = x => typeof x === 'number'

test('happy', () => {
  const fn = when(predicate, x => x + 1)
  expect(fn(11)).toBe(12)
  expect(fn('foo')).toBe('foo')
})

function notNull<T>(a: T | null | undefined): a is T {
  return a != null
}

test('type test', () => {
  const result = pipe(
    1,
    when(
      x => x > 2,
      x => x,
    ),
    tap(x => {
      expectTypeOf(x).toEqualTypeOf<number>()
    }),
    when(
      x => x > 2,
      x => String(x),
    ),
  )

  expectTypeOf(result).toEqualTypeOf<string | number>()
  expect(result).toBe(1)
})

test('with assertion of type', () => {
  const result = pipe(
    [1, null, 2, 3],
    head,
    when(notNull, x => x + 1),
  )

  expectTypeOf(result).toEqualTypeOf<number | null>()
  expect(result).toBe(2)
})
