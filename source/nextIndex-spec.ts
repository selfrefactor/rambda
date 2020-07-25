import {nextIndex} from 'rambda'

const list = [1, 2, 3]

describe('R.nextIndex', () => {
  it('happy', () => {
    const result = nextIndex(4, list)

    result // $ExpectType number
  })
})
