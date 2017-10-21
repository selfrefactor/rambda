const R = require('../../rambda')

test('', () => {
  expect(R.toString([ 1, 2, 3 ])).toEqual('1,2,3')
})
