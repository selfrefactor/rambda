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

    // $ExpectType unknown
    path(['b'], {a: 1})
  })
  test('deep property', () => {
    const testObject = {a: {b: {c: {d: {e: {f: 1}}}}}}
    const result = path(['a', 'b', 'c', 'd', 'e', 'f'], testObject)
    // $ExpectType number
    result
    const curriedResult = path(['a', 'b', 'c', 'd', 'e', 'f'])(testObject)
    // $ExpectType unknown
    curriedResult
  })
  test('issue #668 - path is not correct', () => {
    const object = {
      is: {
        a: 'path',
      },
    }
    const result = path(['is', 'not', 'a'], object)
    // $ExpectType unknown
    result
    const curriedResult = path(['is', 'not', 'a'])(object)
    // $ExpectType unknown
    curriedResult
  })
})
