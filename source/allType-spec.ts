import { allType } from 'rambdax'

describe('R.allType', () => {
  it('happy', () => {
    const result = allType('Array')([1, 2, 3], [], [null])
    result // $ExpectType boolean
  })
})
