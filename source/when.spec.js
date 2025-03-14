import { when } from './when.js'

const predicate = x => typeof x === 'number'

test('happy', () => {
  const fn = when(predicate, x => x + 1)
  expect(fn(11)).toBe(12)
  expect(fn('foo')).toBe('foo')
})
