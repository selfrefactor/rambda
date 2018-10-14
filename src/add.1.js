const R = require('../../rambda')

test('add without curring', () => {
  expect(R.add(2, 3)).toEqual(5)
})

test('add with curring', () => {
  expect(R.add(7)(10)).toEqual(17)
})
