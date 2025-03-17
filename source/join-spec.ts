import { join, pipe } from 'rambda'

it('R.join', () => {
  const result = pipe([1, 2, 3], join('|'))
  result // $ExpectType string
})
