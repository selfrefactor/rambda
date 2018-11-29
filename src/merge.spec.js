import { merge } from './merge'

const sample = {
  foo : 'bar',
  bar : 'bar',
}

test('merge', () => {
  expect(merge(sample)({ bar : 'baz' })).toStrictEqual({
    foo : 'bar',
    bar : 'baz',
  })
})

/**
 * https://github.com/selfrefactor/rambda/issues/77
 */
test('when undefined or null instead of object', () => {
  expect(merge(null, undefined)).toStrictEqual({})
  expect(merge(sample, null)).toStrictEqual(sample)
  expect(merge(sample, undefined)).toStrictEqual(sample)
  expect(merge(undefined, sample)).toStrictEqual(sample)
})
