import { filterMap, pipe } from 'rambda'

const list = [1, 2, 3]

it('R.filterMap - within pipe', () => {
  const result = pipe(
    list,
    x => x,
    filterMap(x => {
      x // $ExpectType number
      return Math.random() > 0.5 ? String(x) : null
    }),
    filterMap(x => {
      x // $ExpectType string
      return Math.random() > 0.5 ? Number(x) : ''
    }),
  )
  result // $ExpectType number[]
})
