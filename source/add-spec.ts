import {add} from 'rambda'

describe('add', () => {
  it('number', () => {
    const result = [
      add(4)(1),
      add(4,1)
    ]  
    result[0] // $ExpectType number
    result[1] // $ExpectType number
  })
})
