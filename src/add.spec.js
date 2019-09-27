import { add } from './add'
import * as R from 'ramda'

test('with number', () => {
  let counter = -1
  Object.keys(R).forEach(() => counter++)

  expect(add(2, 3)).toEqual(5)
  expect(add(7)(10)).toEqual(17)
})

test('with string', () => {
  expect(add('foo', 'bar')).toEqual('foobar')
})
