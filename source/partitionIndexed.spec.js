import { partitionIndexed } from './partitionIndexed'

test('with array', () => {
  const predicate = (x, i) => {
    expect(x).toBeNumber()
    return x > 2
  }
    const list = [ 1, 2, 3, 4 ]

  const result = partitionIndexed(predicate, list)
  const expectedResult = [
    [ 3, 4 ],
    [ 1, 2 ],
  ]

  expect(result).toEqual(expectedResult)
})
