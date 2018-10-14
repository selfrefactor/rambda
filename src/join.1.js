const R = require('../../rambda')

test('curry', () => {
  expect(R.join('|')([ 'foo', 'bar', 'baz' ])).toEqual('foo|bar|baz')

  expect(R.join('|', [ 1, 2, 3 ])).toEqual('1|2|3')

  const spacer = R.join(' ')

  expect(spacer([ 'a', 2, 3.4 ])).toEqual('a 2 3.4')
})
