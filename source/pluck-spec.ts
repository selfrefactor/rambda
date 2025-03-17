import { pipe, pluck } from 'rambda'

it('R.pluck', () => {
  const input = [
    { a: 1, b: 'foo' },
    { a: 2, b: 'bar' },
  ]
  const result = pipe(input, pluck('b'))
  result // $ExpectType string[]
})
