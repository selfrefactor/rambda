import { maxBy, pipe } from 'rambda'

const first = 1
const second = 2

it('R.maxBy', () => {
  const result = pipe(
    second,
    maxBy(x => (x % 2 === 0 ? 1 : -1), first),
  )
  result // $ExpectType number
})
