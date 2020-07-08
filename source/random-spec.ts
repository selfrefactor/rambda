import {random} from 'rambda'

describe('R.random', () => {
  it('happy', () => {
    const result = random(1, 4)

    result // $ExpectType number[]
  })
})
