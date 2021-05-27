import {uniqWith} from 'rambda'

describe('R.uniqWith', () => {
  it('happy', () => {
    const list = [
      {a: 1},
      {a: 1},
    ]

    const fn = (x: any, y: any) => x.a === y.a

    const result = uniqWith(fn, list)
    result // $ExpectType readonly { a: number; }[]
  })
})
