const R = require('../rambda')

const isEven = n => n % 2 === 0
const isOdd = n => n % 2 === 1
const arr = [ 1, 3, 5, 7, 9, 11 ]

test('when true', () => {
  expect(R.none(isEven, arr)).toBeTruthy()
})

test('when false curried', () => {
  expect(R.none(isOdd)(arr)).toBeFalsy()
})

test('passes index to predicate', () => {
  R.none(
    (x, i) => {
      expect(typeof x).toBe('number')
      expect(typeof i).toBe('number')
    }
  )([1,2,3])
})
