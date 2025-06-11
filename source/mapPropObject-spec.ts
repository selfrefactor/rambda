import {  mapPropObject, pipe } from 'rambda'

describe('R.mapPropObject', () => {
  it('iterable with one arguments', () => {
    const result = pipe(
      { a: [1,2,3], b: 'foo' },
      mapPropObject(x => {
        x // $ExpectType number
        return {
          a: x,
          flag: x > 2,
        }
      }, 'a'),
    )

    result.a // $ExpectType { a: number; flag: boolean; }[]
		result.b // $ExpectType string
  })
})
