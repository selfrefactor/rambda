import { convertToType, pipe } from 'rambda'
import { expectTypeOf, it } from 'vitest'

const list = [1, 2, 3]

it('R.convertToType', () => {
  const result = pipe(list, 
		convertToType<string[]>,
		x => {
			expectTypeOf(x).toEqualTypeOf<string[]>()
			return x 
		}
	)
  expectTypeOf(result).toEqualTypeOf<string[]>()
})
