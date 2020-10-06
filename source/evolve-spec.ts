import { evolve } from 'rambda'

describe('R.evolve', () => {
  it('happy', () => {
    const result = evolve()
    
    result // $ExpectType number
  })
  it('curried', () => {
    const result = evolve()

    result // $ExpectType number
  })
})