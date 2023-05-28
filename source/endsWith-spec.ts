import {endsWith} from 'rambda'

describe('R.endsWith - array as iterable', () => {
  const target = [{a: 2}]
  const iterable = [{a: 1}, {a: 2}]
  it('happy', () => {
    const result = endsWith(target, iterable)

    result // $ExpectType boolean
  })
  it('curried', () => {
    const result = endsWith(target)(iterable)

    result // $ExpectType boolean
  })
})

describe('R.endsWith - string as iterable', () => {
  const target = 'bar'
  const iterable = 'foo bar' as 'foo bar' | 'happy' | 'happy-2'
  it('happy', () => {
    const result = endsWith(target, iterable)

    if (result) {
      iterable // $ExpectType "foo bar"
    }
    
    result; // $ExpectType boolean
  })
  it('curried', () => {
    const result = endsWith(target)(iterable)

    if (result) {
      iterable // $ExpectType "foo bar"
    }

    result; // $ExpectType boolean
  })
})
