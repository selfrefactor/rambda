import {replace} from 'rambda'

const str = 'foo bar foo'
const replacer = 'bar'

describe('R.replace', () => {
  it('happy', () => {
    const result = replace(/foo/g, replacer, str)

    result // $ExpectType string
  })
  it('with string as search pattern', () => {
    const result = replace('foo', replacer, str)

    result // $ExpectType string
  })
  it('with function as replacer', () => {
    const result = replace('f(o)o', (m: string, p1: string, offset: number) => {
      m // $ExpectType string
      p1 // $ExpectType string
      offset // $ExpectType number
      return p1
    }, str)

    result // $ExpectType string
  })
})

describe('R.replace - curried', () => {
  it('happy', () => {
    const result = replace(/foo/g, replacer)(str)

    result // $ExpectType string
  })
  it('with string as search pattern', () => {
    const result = replace('foo', replacer)(str)

    result // $ExpectType string
  })
  it('with function as replacer', () => {
    const result = replace('f(o)o')((m: string, p1: string, offset: number) => {
      m // $ExpectType string
      p1 // $ExpectType string
      offset // $ExpectType number
      return p1
    })(str)

    result // $ExpectType string
  })
})
