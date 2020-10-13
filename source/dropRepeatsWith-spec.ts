import { dropRepeatsWith } from 'rambda'

describe('R.dropRepeatsWith', () => {
  it('happy', () => {
    const result = dropRepeatsWith()
    
    result // $ExpectType number
  })
  it('curried', () => {
    const result = dropRepeatsWith()

    result // $ExpectType number
  })
})