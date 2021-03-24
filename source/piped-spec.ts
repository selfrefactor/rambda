import {piped} from 'rambda'

describe('R.piped', () => {
  it('happy', () => {
    const result = piped(
      [1, 2],
      x => {
        return x.length + 1
      },
      x => {
        return x + 10
      }
    )

    result // $ExpectType number
  })
  it('issue #63', () => {
    const result = piped(1, x => x)

    result // $ExpectType number
  })
})
