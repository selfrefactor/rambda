import { lensProp } from './lensProp'
import { viewOr } from './viewOr'

const lens = lensProp('a')
const input = { a : 'foo' }
const fallbackInput = { b : 'bar' }
const fallback = 'FALLBACK'

test('happy', () => {
  const result = viewOr(
    fallback, lens, fallbackInput
  )
  expect(result).toBe(fallback)
})

test('curried', () => {
  const result = viewOr(fallback, lens)(input)
  expect(result).toBe('foo')
})
