import { concat } from './concat.js'
import { mergeWith } from './mergeWith.js'

test('happy', () => {
  const result = mergeWith(
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
    values : [ 10, 20, 15, 35 ],
    b      : true,
  }
  expect(result).toEqual(expected)
})

// https://github.com/ramda/ramda/pull/3222/files#diff-d925d9188b478d2f1d4b26012c6dddac374f9e9d7a336604d654b9a113bfc857
describe('acts as if nil values are simply empty objects', () => {
  it('if the first object is nil and the second empty', () => {
    expect(mergeWith(
      concat, undefined, {}
    )).toEqual({})
  })

  it('if the first object is empty and the second nil', () => {
    expect(mergeWith(
      concat, {}, null
    )).toEqual({})
  })

  it('if both objects are nil', () => {
    expect(mergeWith(
      concat, undefined, null
    )).toEqual({})
  })

  it('if the first object is not empty and the second is nil', () => {
    expect(mergeWith(
      concat, { a : 'a' }, null
    )).toEqual({ a : 'a' })
  })

  it('if the first object is nil and the second is not empty', () => {
    expect(mergeWith(
      concat, undefined, { a : 'a' }
    )).toEqual({ a : 'a' })
  })
})
