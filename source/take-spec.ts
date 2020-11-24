import {take} from 'rambda'

const list = [1, 2, 3, 4]
const str = 'foobar'
const howMany = 2

describe('R.take - array', () => {
  it('happy', () => {
    const result = take(howMany, list)

    result // $ExpectType readonly number[]
  })
  it('curried', () => {
    const result = take(howMany)(list)

    result // $ExpectType readonly number[]
  })
})

describe('R.take - string', () => {
  it('happy', () => {
    const result = take(howMany, str)

    result // $ExpectType string
  })
  it('curried', () => {
    const result = take(howMany)(str)

    result // $ExpectType string
  })
})
