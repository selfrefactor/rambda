const R = require('../../rambda')

test('any', () => {
  expect(R.any(val => val < 0)([ 1, 2 ])).toBeFalsy()
  expect(R.any(val => val < 2)([ 1, 2 ])).toBeTruthy()
})

test('passes index to predicate', () => {
  R.any(
    (x, i) => {
      expect(typeof x).toBe('number')
      expect(typeof i).toBe('number')
    }
  )([1,2,3])
})
