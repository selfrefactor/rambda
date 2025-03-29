import { dropWhile, pipe } from 'rambda'

const list = [1, 2, 3]

describe('R.dropWhile', () => {
  it('happy', () => {
    const result = pipe(
      list,
      dropWhile(x => x > 1),
    )

    result // $ExpectType number[]
  })
  it('with index', () => {
    const result = pipe(
      list,
      dropWhile((x, i) => {
        i // $ExpectType number
        return x + i > 2
      }),
    )

    result // $ExpectType number[]
  })
})
