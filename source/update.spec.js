import { update } from './update'

const list = [ 1, 2, 3 ]

test('happy', () => {
  const newValue = 88
  const index = 1
  const result = update(
    index, newValue, list
  )
  const curriedResult = update(index, newValue)(list)
  const tripleCurriedResult = update(index)(newValue)(list)

  const expected = [ 1, 88, 3 ]
  expect(result).toEqual(expected)
  expect(curriedResult).toEqual(expected)
  expect(tripleCurriedResult).toEqual(expected)
})

test('list has no such index', () => {
  const newValue = 88
  const index = 10
  const result = update(
    index, newValue, list
  )

  expect(result).toEqual(list)
})
