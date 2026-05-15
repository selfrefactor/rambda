import {  evolve, pipe } from 'rambda'
import { expectTypeOf, it } from 'vitest'

it('R.evolve', () => {
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
			foo: x => x + 1,
		})
	)
  expectTypeOf(result.foo).toEqualTypeOf<number>()
  expectTypeOf(result.baz).toEqualTypeOf<number>()
  expectTypeOf(result.nested.a).toEqualTypeOf<number>()
})
