const R = require('../../rambda')

test('', () => {
  const fn = R.ifElse(
    R.has('foo'),
    x => R.prop('foo', x).length,
    () => false
  )

  expect(fn({ foo : 'bar' })).toEqual(3)
  expect(fn({ fo : 'bar' })).toEqual(false)
})
