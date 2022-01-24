import { deletePath } from 'rambda'

describe('R.deletePath', () => {
  it('happy', () => {
    const result = deletePath()
    
    result // $ExpectType number
  })
  it('curried', () => {
    const result = deletePath()

    result // $ExpectType number
  })
})