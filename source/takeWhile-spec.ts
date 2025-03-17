import { pipe, takeWhile } from 'rambda'

const list = [1, 2, 3]

it('R.takeWhile', () => {
  const result = pipe(
    list,
    takeWhile(x => x > 1),
    takeWhile((x, i) => i + x > 1),
  )
  result // $ExpectType number[]
})
