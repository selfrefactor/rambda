import { pathOr } from './pathOr.js'

test('with undefined', () => {
  const result = pathOr('foo', 'x.y', { x: { y: 1 } })

  expect(result).toBe(1)
})

test('with null', () => {
  const result = pathOr('foo', 'x.y', null)

  expect(result).toBe('foo')
})

test('with NaN', () => {
  const result = pathOr('foo', 'x.y', Number.NaN)

  expect(result).toBe('foo')
})

test('curry case (x)(y)(z)', () => {
  const result = pathOr('foo')('x.y.z')({ x: { y: { a: 1 } } })

  expect(result).toBe('foo')
})

test('curry case (x)(y,z)', () => {
  const result = pathOr('foo', 'x.y.z')({ x: { y: { a: 1 } } })

  expect(result).toBe('foo')
})

test('curry case (x,y)(z)', () => {
  const result = pathOr('foo')('x.y.z', { x: { y: { a: 1 } } })

  expect(result).toBe('foo')
})
