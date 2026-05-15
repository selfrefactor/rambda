import { modifyProp, pipe } from 'rambda'
import { expectTypeOf, it } from 'vitest'

it('R.modify', () => {
  const result = pipe(
    { a: 1, b: 2, c: { d: 3 } },
    modifyProp('a', val => val + 1),
  )
  expectTypeOf(result).toEqualTypeOf<{ a: number; b: number; c: { d: number; }; }>()

  pipe(
    { a: 1, b: 2, c: { d: 3 } },
    // @ts-expect-error
    modifyProp('ax', val => val + 1),
  )

  pipe(
    { a: 1, b: 2, c: { d: 3 } },
    // @ts-expect-error
    modifyProp('a', val => String(val)),
  )
})
