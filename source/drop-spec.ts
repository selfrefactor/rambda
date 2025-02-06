import { drop } from 'rambda'

const list = [1, 2, 3, 4]
const str = 'foobar'
const howMany = 2

describe('R.drop - array', () => {
  it('happy', () => {
    drop(howMany, list) // $ExpectType number[]
  })
  it('curried', () => {
    drop(howMany)(list) // $ExpectType unknown[]
  })
})

describe('R.drop - string', () => {
  it('happy', () => {
    drop(howMany, str) // $ExpectType string
  })
  it('curried', () => {
    drop(howMany)(str) // $ExpectType string
  })
})
