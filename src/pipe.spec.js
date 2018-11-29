import { pipe } from './pipe'
import { map } from './map'
import { add } from './add'
import { last } from './last'

test('pipe', () => {
  const result = pipe(
    map(add(1)),
    map(add(10)),
    last
  )([ 1, 2, 3 ])

  expect(result).toEqual(14)
})
