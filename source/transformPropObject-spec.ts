import {  transformPropObject, pipe } from 'rambda'

describe('R.transformPropObject', () => {
  it('iterable with one arguments', () => {
    const result = pipe(
      { a: 1, b: 'foo' },
      transformPropObject(x => {
        x // $ExpectType number
        return x > 2
      }, 'a'),
    )

    result // $ExpectType { a: boolean; b: string; }
  })
})
