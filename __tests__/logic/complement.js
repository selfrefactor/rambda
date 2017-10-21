const R = require('../../rambda')

test('', () => {
  const fn = R.complement(R.any(x => x === 2))

  expect(fn([ 1, 2, 3 ])).toBeFalsy()
})
