import { partitionObject } from './partitionObject.js'

test('happy', () => {
  const predicate = (value, prop) => {
    expect(typeof prop).toBe('string')

    return value > 2
  }
  const hash = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
  }

  const result = partitionObject(predicate)(hash)
  const expectedResult = [
    {
      c: 3,
      d: 4,
    },
    {
      a: 1,
      b: 2,
    },
  ]

  expect(result).toEqual(expectedResult)
})
