import { differenceWith, pipe } from 'rambda'

it('R.difference', () => {
  const result = pipe(
    [{ x: 1 }, { x: 3 }],
    differenceWith((a, b) => a.x === b.x, [{ x: 1 }, { x: 2 }]),
  )

  result // $ExpectType number[]
})
