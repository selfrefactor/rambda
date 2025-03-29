import { pipe, unless } from 'rambda'

const inc = (x: number) => x + 1

describe('R.unless', () => {
  it('happy', () => {
    const result = pipe(
      1,
      unless(x => x > 5, inc),
    )
    result // $ExpectType number
  })
  it('with two different types', () => {
    const result = pipe(
      1,
      unless(
        x => {
          x // $ExpectType number
          return x > 5
        },
        x => {
          x // $ExpectType number
          return `${x}-foo`
        },
      ),
    )
    result // $ExpectType string | number
  })
})
