import { map, pipe } from 'rambda'

const list = [1, 2, 3]

it('R.map - within pipe', () => {
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

it('R.map - without pipe', () => {
  map(x => {
    x // $ExpectType unknown
  })([1, 2, 3])
})

it('R.map - without pipe but explicitly typed', () => {
  const result = map<number[], string>(x => {
    x // $ExpectType number[]
    return String(x)
  })([1, 2, 3])
  result // $ExpectType string[]
})
