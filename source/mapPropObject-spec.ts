import {  map, mapPropObject, pipe } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'

describe('R.mapPropObject', () => {
  it('iterable with one arguments', () => {
    const result = pipe(
      { a: [1,2,3], b: 'foo' },
      mapPropObject('a', x => {
        expectTypeOf(x).toEqualTypeOf<number>()
        return {
          a: x,
          flag: x > 2,
        }
      }),
    )

    expectTypeOf(result.a).toEqualTypeOf<{ a: number; flag: boolean; }[]>()
		expectTypeOf(result.b).toEqualTypeOf<string>()
  })

  it('iterable with two arguments', () => {
    const result = pipe(
      { a: [1,2,3], b: 'foo' },
      mapPropObject('a', (x, list) => {
        expectTypeOf(x).toEqualTypeOf<number>()
        expectTypeOf(list).toEqualTypeOf<number[]>()
				return list.length
      }),
    )
		expectTypeOf(result.a).toEqualTypeOf<number[]>()
		expectTypeOf(result.b).toEqualTypeOf<string>()
  })

  it('more complex example', () => {
    const result = pipe(
      [{a:[true, false, true], b: 'foo'}],
      map(
					mapPropObject( 'a',(a) => {
						expectTypeOf(a).toEqualTypeOf<boolean>()
						return {a, b: 2}
								})
					)
			)

    expectTypeOf(result[0].a[0].a).toEqualTypeOf<boolean>()
    expectTypeOf(result[0].a[0].b).toEqualTypeOf<number>()
  })
})
