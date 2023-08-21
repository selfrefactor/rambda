import { mergeLeft } from './mergeLeft.js'

const obj = {
  bar : 2,
  foo : 1,
}

test('happy', () => {
  expect(mergeLeft({ bar : 20 }, obj)).toEqual({
    bar : 20,
    foo : 1,
  })
})

test('curry', () => {
  expect(mergeLeft({ baz : 3 })(obj)).toEqual({
    bar : 2,
    baz : 3,
    foo : 1,
  })
})

test('when undefined or null instead of object', () => {
  expect(mergeLeft(null, undefined)).toEqual({})
  expect(mergeLeft(obj, null)).toEqual(obj)
  expect(mergeLeft(obj, undefined)).toEqual(obj)
  expect(mergeLeft(undefined, obj)).toEqual(obj)
})
