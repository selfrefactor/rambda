import { splitAt } from 'rambda'

describe('R.splitAt', () => {
  it('happy', () => {
    const result = splitAt()
    
    result // $ExpectType number
  })
  it('curried', () => {
    const result = splitAt()

    result // $ExpectType number
  })
})