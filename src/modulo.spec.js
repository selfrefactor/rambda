const R = require('../../rambda')

test('', () => {
  expect(R.modulo(17, 3)).toEqual(2)
  expect(R.modulo(15)(6)).toEqual(3)
})
