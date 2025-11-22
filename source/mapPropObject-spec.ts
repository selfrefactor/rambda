import {  map, mapPropObject, pipe } from 'rambda'

describe('R.mapPropObject', () => {
  it('iterable with one arguments', () => {
    const result = pipe(
      { a: [1,2,3], b: 'foo' },
      mapPropObject('a', x => {
        x // $ExpectType number
        return {
          a: x,
          flag: x > 2,
        }
      }),
    )

    result.a // $ExpectType { a: number; flag: boolean; }[]
		result.b // $ExpectType string
  })

  it('iterable with two arguments', () => {
    const result = pipe(
      { a: [1,2,3], b: 'foo' },
      mapPropObject('a', (x, list) => {
        x // $ExpectType number
        list // $ExpectType number[]
				return list.length
      }),
    )
		result.a // $ExpectType number[]
		result.b // $ExpectType string
  })

  it('more complex example', () => {
    const result = pipe(
      [{a:[true, false, true], b: 'foo'}],
      map(
					mapPropObject( 'a',(a) => {
						a // $ExpectType boolean
						return {a, b: 2}
								})
					)
			)

    result[0].a[0].a // $ExpectType boolean
    result[0].a[0].b // $ExpectType number
  })
})
