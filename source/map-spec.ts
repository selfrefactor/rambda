import { map, pipe } from 'rambda'

const list = [1, 2, 3]

it('R.map', () => {
  const result = pipe(
    list,
    x => x,
    map(x => {
      x // $ExpectType number
      return String(x)
    }),
  )
  result // $ExpectType string[]
})
