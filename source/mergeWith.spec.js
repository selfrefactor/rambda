import { concat } from './concat.js'
import { mergeWithFn } from './mergeWith.js'

test('happy', () => {
  const result = mergeWithFn(
    concat,
    {
      a      : true,
      values : [ 10, 20 ],
    },
    {
      b      : true,
      values : [ 15, 35 ],
    }
  )
  const expected = {
    a      : true,
    b      : true,
    values : [ 10, 20, 15, 35 ],
  }
  expect(result).toEqual(expected)
})

// https://github.com/ramda/ramda/pull/3222/files#diff-d925d9188b478d2f1d4b26012c6dddac374f9e9d7a336604d654b9a113bfc857
describe('acts as if nil values are simply empty objects', () => {
  it('if the first object is nil and the second empty', () => {
    expect(mergeWithFn(
      concat, undefined, {}
    )).toEqual({})
  })

  it('if the first object is empty and the second nil', () => {
    expect(mergeWithFn(
      concat, {}, null
    )).toEqual({})
  })

  it('if both objects are nil', () => {
    expect(mergeWithFn(
      concat, undefined, null
    )).toEqual({})
  })

  it('if the first object is not empty and the second is nil', () => {
    expect(mergeWithFn(
      concat, { a : 'a' }, null
    )).toEqual({ a : 'a' })
  })

  it('if the first object is nil and the second is not empty', () => {
    expect(mergeWithFn(
      concat, undefined, { a : 'a' }
    )).toEqual({ a : 'a' })
  })
})
