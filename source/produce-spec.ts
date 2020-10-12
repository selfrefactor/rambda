import {produce, pipe, add} from 'rambda'

describe('R.produce', () => {
  it('happy', () => {
    const result = produce(
      {
        a: pipe(add(2), add(3)),
        b: x => {
          x // $ExpectType number
          return {foo: x}
        },
      },
      1
    )

    result.a // $ExpectType number
    result.b.foo // $ExpectType number
  })
  it('curried require explicit types', () => {
    interface Output {
      a: number,
      b: {foo: number},
    }
    const result = produce<number, Output>({
      a: pipe(add(2), add(3)),
      b: x => {
        x // $ExpectType number
        return {foo: x}
      },
    })(1)

    result.a // $ExpectType number
    result.b.foo // $ExpectType number
  })
})
