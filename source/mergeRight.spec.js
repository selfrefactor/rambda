import { mergeRight } from './mergeRight.js'

const obj = {
  bar : 2,
  foo : 1,
}

test('happy', () => {
  expect(mergeRight(obj, { bar : 20 })).toEqual({
    bar : 20,
    foo : 1,
  })
})

test('curry', () => {
  expect(mergeRight(obj)({ baz : 3 })).toEqual({
    bar : 2,
    baz : 3,
    foo : 1,
  })
})

/**
 * https://github.com/selfrefactor/rambda/issues/77
 */
test('when undefined or null instead of object', () => {
  expect(mergeRight(null, undefined)).toEqual({})
  expect(mergeRight(obj, null)).toEqual(obj)
  expect(mergeRight(obj, undefined)).toEqual(obj)
  expect(mergeRight(undefined, obj)).toEqual(obj)
})

test('with function inside object', () => {
  const result = mergeRight({ a : 1 }, { b : () => 1 })
  expect(typeof result.b).toBe('function')
})

describe('acts as if nil values are simply empty objects', () => {
  const a = {
    w : 1,
    x : 2,
  }
  const b = {
    w : 100,
    y : 3,
    z : 4,
  }

  it('if the first object is nil', () => {
    expect(mergeRight(null, b)).toEqual(b)
  })

  it('if the second object is nil', () => {
    expect(mergeRight(a, undefined)).toEqual(a)
  })

  it('if both objects are nil', () => {
    expect(mergeRight(null, undefined)).toEqual({})
  })
})
