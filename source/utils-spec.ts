import {utils} from 'rambda'

describe('R.range', () => {
  it('happy', () => {
    const result = utils.range(1, 4)

    result // $ExpectType number[]
  })
})
