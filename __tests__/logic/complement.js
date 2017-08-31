const R = require('../../dist/rambda.cjs')

test('', () => {
  const fn = R.complement(
    R.any(x => x === 2)
  )

  expect(
    fn([ 1, 2, 3 ])
  ).toBeFalsy()
})
