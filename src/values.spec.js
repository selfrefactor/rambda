import { values } from './values'

test('happy', () => {
  expect(values({
    a : 1,
    b : 2,
    c : 3,
  })).toEqual([ 1, 2, 3 ])
})

test('with bad input', () => {
  expect(values(null)).toEqual([])
  expect(values(undefined)).toEqual([])
  expect(values(55)).toEqual([])
  expect(values('foo')).toEqual([])
  expect(values(true)).toEqual([])
  expect(values(false)).toEqual([])
  expect(values(NaN)).toEqual([])
  expect(values(Infinity)).toEqual([])
  expect(values([])).toEqual([])
})
