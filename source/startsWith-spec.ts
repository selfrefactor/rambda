import {startsWith} from 'rambda'

describe('R.startsWith - array', () => {
  const question = [{a: 1}]
  const iterable = [{a: 1}, {a: 2}]
  it('happy', () => {
    const result = startsWith(question, iterable)
    result // $ExpectType boolean
  })
  it('curried', () => {
    const result = startsWith(question)(iterable)
    result // $ExpectType boolean
  })
})

describe('R.startsWith - string', () => {
  const question = 'foo'
  const iterable = 'foo bar'
  it('happy', () => {
    const result = startsWith(question, iterable)
    result // $ExpectType boolean
  })
  it('curried', () => {
    const result = startsWith(question)(iterable)
    result // $ExpectType boolean
  })
})
