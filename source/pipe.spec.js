import {add, last, map} from '../rambda'
import {pipe} from './pipe'

test('happy', () => {
  const list = [1, 2, 3]

  const result = pipe(map(add(1)), map(add(10)), last)(list)

  expect(result).toEqual(14)
})

test('with bad input', () => {
  expect(() => pipe()).toThrowWithMessage(
    Error,
    'pipe requires at least one argument'
  )
})
