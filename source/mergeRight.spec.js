import { mergeRight } from './mergeRight.js'

const obj = {
  foo : 1,
  bar : 2,
}

test('happy', () => {
  expect(mergeRight(obj, { bar : 20 })).toEqual({
    foo : 1,
    bar : 20,
  })
})

test('curry', () => {
  expect(mergeRight(obj)({ baz : 3 })).toEqual({
    foo : 1,
    bar : 2,
    baz : 3,
  })
})

/**
 * https://github.com/selfrefactor/rambda/issues/77
 */
test('when undefined or null instead of object', () => {
  expect(mergeRight(null, undefined)).toEqual({})
  expect(mergeRight(obj, null)).toEqual(obj)
  expect(mergeRight(obj, undefined)).toEqual(obj)
  expect(mergeRight(undefined, obj)).toEqual(obj)
})
