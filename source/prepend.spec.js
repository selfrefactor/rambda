import { prepend } from './prepend.js'

test('happy', () => {
  expect(prepend('yes')(['foo', 'bar', 'baz'])).toEqual(['yes', 'foo', 'bar', 'baz'])
})

test('with empty list', () => {
  expect(prepend('foo')([])).toEqual(['foo'])
})
