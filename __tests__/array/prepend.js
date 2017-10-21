const R = require('../../rambda')

test('', () => {
  expect(R.prepend('f', 'oo')).toEqual('foo')
})

test('prepend', () => {
  expect(R.prepend('yes', [ 'foo', 'bar', 'baz' ])).toEqual([ 'yes', 'foo', 'bar', 'baz' ])

  expect(R.prepend('foo')([ ])).toEqual([ 'foo' ])
})
