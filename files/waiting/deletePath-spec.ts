import {deletePath} from 'rambda'

describe('R.deletePath', () => {
  it('happy', () => {
    interface Output {
      a: number,
      b: {
        c: number,
      },
    }
    const input = {a: 1, b: {c: 2, d: 3}}
    const result = deletePath<Output>('a.d', input)

    result // $ExpectType Output
  })
})
