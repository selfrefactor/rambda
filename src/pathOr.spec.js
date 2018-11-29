import { pathOr } from './pathOr'

test('with undefined', () => {
  const result = pathOr('foo', 'x.y', { x : { y : 1 } })

  expect(result).toStrictEqual(1)
})

test('with null', () => {
  const result = pathOr('foo', 'x.y', null)

  expect(result).toStrictEqual('foo')
})

test('with NaN', () => {
  const result = pathOr('foo', 'x.y', NaN)

  expect(result).toStrictEqual('foo')
})

test('curry case (x)(y)(z)', () => {
  const result = pathOr('foo')('x.y.z')({ x : { y : { a : 1 } } })

  expect(result).toStrictEqual('foo')
})

test('curry case (x)(y,z)', () => {
  const result = pathOr('foo', 'x.y.z')({ x : { y : { a : 1 } } })

  expect(result).toStrictEqual('foo')
})

test('curry case (x,y)(z)', () => {
  const result = pathOr('foo')('x.y.z', { x : { y : { a : 1 } } })

  expect(result).toStrictEqual('foo')
})
