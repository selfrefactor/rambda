import { reduce } from './reduce'

test('happy', () => {
  const reducer = (
    prev, current, i
  ) => {
    expect(i).toBeNumber()

    return prev + current
  }
  const initialValue = 1
  const list = [ 1, 2, 3 ]

  expect(reduce(
    reducer, initialValue, list
  )).toEqual(7)
})
