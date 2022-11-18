import {path} from 'rambda'

const input = {a: {b: {c: true}}}

describe('R.path with string as path', () => {
  it('without specified output type', () => {
    // $ExpectType unknown
    path('a.b.c', input)
    // $ExpectType unknown
    path('a.b.c')(input)
  })
  it('with specified output type', () => {
    // $ExpectType boolean | undefined
    path<boolean>('a.b.c', input)
    // $ExpectType boolean | undefined
    path<boolean>('a.b.c')(input)
  })
})

describe('R.path with list as path', () => {
  it('with array as path', () => {
    // $ExpectType boolean
    path(['a', 'b', 'c'], input)
    // $ExpectType unknown
    path(['a', 'b', 'c'])(input)
  })
  test('shallow property', () => {
    // $ExpectType number
    path(['a'], {a: 1})
    
    path(['b'], {a: 1}) // $ExpectError
  })
  test('deep property', () => {
    // $ExpectType number
    path(['a', 'b', 'c', 'd', 'e', 'f'], {a: {b: {c: {d: {e: {f: 1}}}}}})
  })
})
