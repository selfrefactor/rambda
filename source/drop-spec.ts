import { drop, pipe } from 'rambda'

it('R.drop', () => {
  const result = pipe([1, 2, 3, 4], drop(2))
  result // $ExpectType number[]
})
