import { rejectIndexed } from './rejectIndexed'

const isOdd = (x, i) => {
  expect(x).toBeNumber()
  expect(i).toBeNumber()

  return x % 2 === 1
}

test('with array', () => {
  expect(rejectIndexed(isOdd)([ 1, 2, 3, 4 ])).toEqual([ 2, 4 ])
})

test('with object', () => {
  const obj = {
    a : 1,
    b : 2,
    c : 3,
    d : 4,
  }
  expect(rejectIndexed(isOdd, obj)).toEqual({
    b : 2,
    d : 4,
  })
})
