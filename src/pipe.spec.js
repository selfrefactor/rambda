import { add } from './add'
import { last } from './last'
import { map } from './map'
import { pipe } from './pipe'

test('pipe', () => {
  const result = pipe(
    map(add(1)),
    map(add(10)),
    last
  )([ 1, 2, 3 ])

  expect(result).toEqual(14)
})

test('with bad input', () => {
  expect(() => pipe()).toThrow('pipe requires at least one argument')
})
