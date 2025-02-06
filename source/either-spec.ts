import { either } from 'rambda'

describe('R.either', () => {
  it('with passed type', () => {
    const fn = either<number[]>(
      x => x > 1,
      x => x % 2 === 0,
    )
    fn(2) // $ExpectType boolean
  })
  it('no type passed', () => {
    const fn = either(
      x => {
        // @ts-expect-error
        return x > 1
      },
      x => {
        // @ts-expect-error
        return x % 2 === 0
      },
    )
    fn(2) // $ExpectType boolean
  })
  it('only one type passed in predicate', () => {
    const fn = either(
      (x: number) => {
        x // $ExpectType number
        return x > 1
      },
      x => {
        x // $ExpectType number
        return x % 2 === 0
      },
    )
    fn(2) // $ExpectType boolean
  })
})
