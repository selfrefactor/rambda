import { countBy } from 'rambda'

describe('R.countBy', () => {
  it('happy', () => {
    const result = countBy()
    
    result // $ExpectType number
  })
  it('curried', () => {
    const result = countBy()

    result // $ExpectType number
  })
})