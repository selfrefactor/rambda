import {where, equals} from 'rambda'

describe('R.where', () => {
  it('happy', () => {
    const input = {
      a : 'foo',
      b : 'bar',
      x : 11,
      y : 19,
    }
    const conditions ={
      a : equals('foo'),
      b : equals('bar'),
    }
    const result = where(conditions, input)
    const curriedResult = where(conditions)(input)
    result // $ExpectType boolean
    curriedResult // $ExpectType boolean
  })
})
