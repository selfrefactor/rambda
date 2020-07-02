import {add} from 'rambda'

describe('R.add', () => {
  it('happy', () => {
    const result = [add(4)(1), add(4, 1)]
    result[0] // $ExpectType number
    result[1] // $ExpectType number
  })
})
