const R = require('../../rambda')

const condition = R.has('foo')
const ifFn = x => R.prop('foo', x).length
const elseFn = () => false

test('', () => {
  const fn = R.ifElse(
    condition,
    ifFn,
    elseFn
  )

  expect(fn({ foo : 'bar' })).toEqual(3)
  expect(fn({ fo : 'bar' })).toEqual(false)
})

test('accept constant as condition', () => {
  const fn = R.ifElse(
    true,
    R.always(true),
    R.always(false)
  )

  expect(fn()).toEqual(true)
})

test('accept constant as condition - case 2', () => {
  const fn = R.ifElse(
    false,
    R.always(true),
    R.always(false)
  )

  expect(fn()).toEqual(false)
})

test('curry (x)(y,z)', () => {
  const fn = R.ifElse(condition, ifFn)(elseFn)

  expect(fn({ foo : 'bar' })).toEqual(3)
  expect(fn({ fo : 'bar' })).toEqual(false)
})

test('curry (x)(y)(z)', () => {
  const fn = R.ifElse(condition)(ifFn)(elseFn)

  expect(fn({ foo : 'bar' })).toEqual(3)
  expect(fn({ fo : 'bar' })).toEqual(false)
})
