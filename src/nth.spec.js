import { nth } from './nth'

test('', () => {
  expect(nth(2, [ 1, 2, 3, 4 ])).toStrictEqual(3)
})

test('with curry', () => {
  expect(nth(2)([ 1, 2, 3, 4 ])).toStrictEqual(3)
})

test('with string', () => {
  expect(nth(2)('foo')).toStrictEqual('o')
})

test('with negative index', () => {
  expect(nth(-3)([ 1, 2, 3, 4 ])).toStrictEqual(2)
})
