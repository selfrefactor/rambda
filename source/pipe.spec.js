import { add, last, length, map } from '../rambda.js'
import { __findHighestArity } from './applySpec.js'
import { pipe } from './pipe.js'

test('happy', () => {
  const list = [ 1, 2, 3 ]
  const result = pipe(
    map(add(1)), map(add(10)), last
  )(list)

  expect(result).toBe(14)
})

test('issue #627', () => {
  expect(__findHighestArity({ len : pipe(length) })).toBe(1)
})

test('with bad input', () => {
  expect(() => pipe()).toThrowWithMessage(Error,
    'pipe requires at least one argument')
})
