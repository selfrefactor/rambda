import {max} from 'rambda'

const first = 1
const second = 2        

describe('R.max', () => {     
  it('happy', () => {
    const result = max(first, second)
    result // $ExpectType 1 | 2
  })
  it('curried', () => {
    const result = max(first, second)
    result // $ExpectType 1 | 2
  })
  it('curried - cann pass type', () => {
    const result = max<number>(first, second)
    result // $ExpectType number
  })
  it('can pass type', () => {
    const result = max<number>(first, second)
    result // $ExpectType number
  })
})
