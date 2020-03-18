import { mergeRight } from './mergeRight'

test('', () => {
  const x = { a : 10 }
  const y = {
    a : 0,
    b : 1,
    c : 2,
  }
  const result = mergeRight(x, y)
  expect(result).toEqual({
    a : 10,
    b : 1,
    c : 2,
  })
})
