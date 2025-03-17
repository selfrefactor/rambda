import { any, pipe } from 'rambda'

it('R.any', () => {
  const result = pipe(
    [1, 2, 3],
    any(x => {
      x // $ExpectType number
      return x > 2
    }),
  )
  result // $ExpectType boolean
})
