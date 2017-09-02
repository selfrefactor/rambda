const R = require('../../rambda')

test('flip', () => {
  var fn = R.flip(R.subtract)

  expect(
    fn(1)(7)
  ).toEqual(6)
  expect(
    fn(1,7)
  ).toEqual(6)
})
