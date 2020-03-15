import { add } from './add'

test('with number', () => {
  expect(add(2, 3)).toEqual(5)
  expect(add(7)(10)).toEqual(17)
})

test('string is bad input', () => {
  expect(add('foo', 'bar')).toBeNaN()
})

test('ramda specs', () => {
  expect(add('1', '2'),).toEqual(3)
  expect(add(1, '2'),).toEqual(3)
  expect(add(true, false),).toEqual(1)
  expect(add(null, null),).toEqual(0)
  expect(add(undefined, undefined),).toEqual(NaN)
  expect(add(new Date(1), new Date(2)),).toEqual(3)
})
