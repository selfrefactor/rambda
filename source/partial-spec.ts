import {partial} from 'rambda'

describe('R.partial', () => {
  it('happy', () => {
    function fn(
      aString: string,
      aNumber: number,
      aBoolean: boolean,
      aNull: null
    ) {
      return {aString, aNumber, aBoolean, aNull}
    }

    // @ts-expect-error
    partial(fn, 1)

    const fn1 = partial(fn, ['a'])

    // @ts-expect-error
    partial(fn1, ['b'])

    const fn2 = partial(fn1, [2])
    const result = fn2(true, null)
    result // $ExpectType { aString: string; aNumber: number; aBoolean: boolean; aNull: null; }
  })
})
