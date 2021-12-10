import {startsWith} from 'rambda'

describe('R.startsWith - array as iterable', () => {
  const target = [{a:1}]
  const iterable = [{a:1}, {a:2}]
  it('happy', () => {
    const result = startsWith(target, iterable)

    result // $ExpectType boolean
  })
  it('curried', () => {
    const result = startsWith(target)(iterable)

    result // $ExpectType boolean
  })
})

describe('R.startsWith - string as iterable', () => {
  const target = 'foo'
  const iterable = 'foo bar'
  it('happy', () => {
    const result = startsWith(target, iterable)

    result // $ExpectType boolean
  })
  it('curried', () => {
    const result = startsWith(target)(iterable)

    result // $ExpectType boolean
  })
})
