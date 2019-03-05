import { add } from './add'

test('with number', () => {
  expect(add(2, 3)).toEqual(5)
  expect(add(7)(10)).toEqual(17)
})

test('with string', () => {
  expect(add('foo', 'bar')).toEqual('foobar')
})
