const R = require('../../rambda')

test('', () => {
  expect(R.append('o', 'fo')).toEqual('foo')
})

test('', () => {
  expect(R.compose(
    R.flatten,
    R.map(R.append(0))
  )([ [ 1 ], [ 2 ], [ 3 ] ])).toEqual([ 1, 0, 2, 0, 3, 0 ])

  expect(R.append('tests', [ 'write', 'more' ])).toEqual([ 'write', 'more', 'tests' ])

  expect(R.append('tests', [])).toEqual([ 'tests' ])

  expect(R.append([ 'tests' ], [ 'write', 'more' ])).toEqual([ 'write', 'more', [ 'tests' ] ])
})

test('should not modify arguments', () => {
  const a = [ 1, 2, 3 ]
  const b = R.append(4, a)

  expect(a).toEqual([ 1, 2, 3 ])
  expect(b).toEqual([ 1, 2, 3, 4 ])
})
