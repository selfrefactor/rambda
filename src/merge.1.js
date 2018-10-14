const R = require('../../rambda')

const sample = {
  foo : 'bar',
  bar : 'bar',
}

test('merge', () => {
  expect(R.merge(sample)({ bar : 'baz' })).toEqual({
    foo : 'bar',
    bar : 'baz',
  })
})

/**
 * https://github.com/selfrefactor/rambda/issues/77
 */
test('when undefined or null instead of object', () => {
  expect(R.merge(null, undefined)).toEqual({})
  expect(R.merge(sample, null)).toEqual(sample)
  expect(R.merge(sample, undefined)).toEqual(sample)
  expect(R.merge(undefined, sample)).toEqual(sample)
})
