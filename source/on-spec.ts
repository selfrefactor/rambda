import { on } from 'rambda'

describe('R.on', () => {
  it('happy', () => {
    const result = on()
    
    result // $ExpectType number
  })
  it('curried', () => {
    const result = on()

    result // $ExpectType number
  })
})