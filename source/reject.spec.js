import { reject } from './reject'

const isOdd = n => n % 2 === 1

test('with array', () => {
  expect(reject(isOdd, [ 1, 2, 3, 4 ])).toEqual([ 2, 4 ])
})

test('with object', () => {
  expect(reject(isOdd, {
    a : 1,
    b : 2,
    c : 3,
    d : 4,
  })).toEqual({
    b : 2,
    d : 4,
  })
})

test('pass index as second argument', () => {
  reject((x, i) => {
    expect(typeof x).toBe('number')
    expect(typeof i).toBe('number')
  },
  [ 10, 12, 15 ])
})
