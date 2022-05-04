import { always } from './always.js'
import { applySpec } from './applySpec.js'

test('happy', () => {
  const fn = always(7)

  expect(fn()).toBe(7)
  expect(fn()).toBe(7)
})

test('compatibility with applySpec', () => {
  const spec = applySpec({ x : always('foo') })
  expect(spec({})).toEqual({ x : 'foo' })
})
