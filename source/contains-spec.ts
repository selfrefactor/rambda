import { contains } from 'rambda'

describe('R.contains', () => {
  const target = {a:1}
  const compareTo = {a:2, b:2}
  it('happy', () => {
    const result = contains(target, compareTo)
    
    result // $ExpectType boolean
  })
  it('curried', () => {
    const result = contains(target)(compareTo)

    result // $ExpectType boolean
  })
})
