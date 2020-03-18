import { findInObject } from './findInObject'

const fn = (x, key) => x > 1 && key.length > 1

test('ok', () => {
  const input = {
    a   : 1,
    b   : 2,
    foo : 3,
  }
  expect(findInObject(fn)(input)).toEqual({
    prop  : 'foo',
    value : 3,
  })
})

test('not found', () => {
  const input = {
    a : 1,
    b : 2,
  }
  expect(findInObject(fn, input)).toEqual({ fallback : true })
})
