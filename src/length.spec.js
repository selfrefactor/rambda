import { length } from './length'

test('test', () => {
  expect(length('foo')).toStrictEqual(3)
  expect(length([ 1, 2, 3 ])).toStrictEqual(3)
  expect(length([])).toStrictEqual(0)
})
