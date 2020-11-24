import {drop} from 'rambda'

const list = [1, 2, 3, 4]
const str = 'foobar'
const howMany = 2

describe('R.drop - array', () => {
  it('happy', () => {
    const result = drop(howMany, list)
    result // $ExpectType readonly number[]
  })
  it('curried', () => {
    const result = drop(howMany)(list)
    result // $ExpectType readonly number[]
  })
})

describe('R.drop - string', () => {
  it('happy', () => {
    const result = drop(howMany, str)
    result // $ExpectType string
  })
  it('curried', () => {
    const result = drop(howMany)(str)
    result // $ExpectType string
  })
})
