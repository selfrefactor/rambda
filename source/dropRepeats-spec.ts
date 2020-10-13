import { dropRepeats } from 'rambda'

describe('R.dropRepeats', () => {
  it('happy', () => {
    const result = dropRepeats([1,2,2,3])
    
    result // $ExpectType number[]
  })
  it('curried', () => {
    const result = dropRepeats([1, 'foo', 'foo'])

    result // $ExpectType (string | number)[]
  })
})