import { mergeAll } from './mergeAll.js'

test('case 1', () => {
  const arr = [ { a : 1 }, { b : 2 }, { c : 3 } ]
  const expectedResult = {
    a : 1,
    b : 2,
    c : 3,
  }
  expect(mergeAll(arr)).toEqual(expectedResult)
})

test('case 2', () => {
  expect(mergeAll([ { foo : 1 }, { bar : 2 }, { baz : 3 } ])).toEqual({
    bar : 2,
    baz : 3,
    foo : 1,
  })
})

describe('acts as if nil values are simply empty objects', () => {
  it('if the first object is nil', () => {
    expect(mergeAll([ null, { foo : 1 }, { foo : 2 }, { bar : 2 } ])).toEqual({
      bar : 2,
      foo : 2,
    })
  })

  it('if the last object is nil', () => {
    expect(mergeAll([ { foo : 1 }, { foo : 2 }, { bar : 2 }, undefined ])).toEqual({
      bar : 2,
      foo : 2,
    })
  })

  it('if an intermediate object is nil', () => {
    expect(mergeAll([ { foo : 1 }, { foo : 2 }, null, { bar : 2 } ])).toEqual({
      bar : 2,
      foo : 2,
    })
  })
})
