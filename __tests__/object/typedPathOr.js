const R = require('../../rambda')

test('with different types', () => {
  const x = 'foo'
  const y = 'a.b.c'
  const z = { a : { b : { c : 1 } } }
  const result = R.typedPathOr(x, y, z)
  expect(
    result
  ).toEqual('foo')
})

test('curry case (x)(y)(z)', () => {
  const x = 'foo'
  const y = 'a.b.c'
  const z = { a : { b : { c : 1 } } }
  const result = R.typedPathOr(x)(y)(z)
  expect(
    result
  ).toEqual('foo')
})

test('curry case (x)(y,z)', () => {
  const x = 'foo'
  const y = 'a.b.c'
  const z = { a : { b : { c : 1 } } }
  const result = R.typedPathOr(x)(y, z)
  expect(
    result
  ).toEqual('foo')
})

test('with same types', () => {
  const x = 0
  const y = 'a.b.c'
  const z = { a : { b : { c : 1 } } }
  const result = R.typedPathOr(x, y, z)
  expect(
    result
  ).toEqual(1)
})

test('curry case (x,y)(z)', () => {
  const x = 0
  const y = 'a.b.c'
  const z = { a : { b : { c : 1 } } }
  const result = R.typedPathOr(x, y)(z)
  expect(
    result
  ).toEqual(1)
})
