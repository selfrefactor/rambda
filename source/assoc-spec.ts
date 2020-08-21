import {assoc} from 'rambda'

describe('R.assoc', () => {
  it('happy', () => {
    const result = assoc('b', 2, {a: 1})

    result.b // $ExpectType number
  })
})
