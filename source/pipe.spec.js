import {add, last, map, length} from '../rambda'
import {pipe} from './pipe'
import {__findHighestArity} from './applySpec'

test('happy', () => {
  const list = [1, 2, 3]
  const result = pipe(map(add(1)), map(add(10)), last)(list)

  expect(result).toEqual(14)
})

test('issue #627', () => {
  expect(__findHighestArity({len: pipe(length)})).toBe(1)
})

test('with bad input', () => {
  expect(() => pipe()).toThrowWithMessage(
    Error,
    'pipe requires at least one argument'
  )
})
