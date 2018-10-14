const R = require('../rambda')

test('', () => {
  expect(R.replace('foo', 'yes', 'foo bar baz')).toEqual('yes bar baz')

  expect(R.replace(/\s/g)('|')('foo bar baz')).toEqual('foo|bar|baz')
  expect(R.replace(/\s/g)('|', 'foo bar baz')).toEqual('foo|bar|baz')
  expect(R.replace(/\s/g, '|')('foo bar baz')).toEqual('foo|bar|baz')
})
