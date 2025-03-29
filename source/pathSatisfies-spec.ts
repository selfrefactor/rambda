import { pathSatisfies, pipe } from 'rambda'

const input = { a: { b: { c: 'bar' } } }

describe('R.pathSatisfies', () => {
  it('happy', () => {
    const result = pipe(
      input,
      pathSatisfies(
        x => {
          x // $ExpectType string
          return x !== 'foo'
        },
        ['a', 'b', 'c'],
      ),
    )
    const resultStringInput = pipe(
      input,
      pathSatisfies(x => {
        x // $ExpectType string
        return x !== 'foo'
      }, 'a.b.c'),
    )
    result // $ExpectType boolean
    resultStringInput // $ExpectType boolean
  })
})
