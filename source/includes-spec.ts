import { pipe , includes} from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

describe('R.includes', () => {
  it('happy', () => {
    const list = [{ a: { b: '1' } }, { a: { b: '2' } }, { a: { b: '3' } }]
    const result = pipe({ a: { b: '1' } }, includes(list))
    expectTypeOf(result).toEqualTypeOf<boolean>()
  })
  it('with string', () => {
    const result = pipe('oo', includes('foo'))
    expectTypeOf(result).toEqualTypeOf<boolean>()
  })
  it('with array of strings', () => {
		const result = pipe('1', includes(['1','2','3']))
    expectTypeOf(result).toEqualTypeOf<boolean>()
  })
})
