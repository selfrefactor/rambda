import {min} from 'rambda'

const first = 1
const second = 2

describe('R.min', () => {
  it('happy', () => {
    const result = min(first, second)
    result // $ExpectType 1 | 2
  })
  it('curried', () => {
    const result = min(first, second)
    result // $ExpectType 1 | 2
  })
  it('curried - cann pass type', () => {
    const result = min<number>(first, second)
    result // $ExpectType number
  })
  it('can pass type', () => {
    const result = min<number>(first, second)
    result // $ExpectType number
  })
})
