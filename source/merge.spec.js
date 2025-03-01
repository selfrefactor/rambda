import { merge } from './merge.js'

const obj = {
  foo: 1,
  bar: 2,
}

test('happy', () => {
  expect(merge(obj, { bar: 20 })).toEqual({
    foo: 1,
    bar: 20,
  })
})

test('curry', () => {
  expect(merge(obj)({ baz: 3 })).toEqual({
    foo: 1,
    bar: 2,
    baz: 3,
  })
})

/**
 * https://github.com/selfrefactor/rambda/issues/77
 */
test('when undefined or null instead of object', () => {
  expect(merge(null, undefined)).toEqual({})
  expect(merge(obj, null)).toEqual(obj)
  expect(merge(obj, undefined)).toEqual(obj)
  expect(merge(undefined, obj)).toEqual(obj)
})

test('with function inside object', () => {
  const result = merge({ a: 1 }, { b: () => 1 })
  expect(typeof result.b).toBe('function')
})

describe('acts as if nil values are simply empty objects', () => {
  const a = {
    w: 1,
    x: 2,
  }
  const b = {
    w: 100,
    y: 3,
    z: 4,
  }

  it('if the first object is nil', () => {
    expect(merge(null, b)).toEqual(b)
  })

  it('if the second object is nil', () => {
    expect(merge(a, undefined)).toEqual(a)
  })

  it('if both objects are nil', () => {
    expect(merge(null, undefined)).toEqual({})
  })
})
