import { dropRepeats } from 'rambda'

describe('R.dropRepeats', () => {
  it('happy', () => {
    const result = dropRepeats()
    
    result // $ExpectType number
  })
  it('curried', () => {
    const result = dropRepeats()

    result // $ExpectType number
  })
})