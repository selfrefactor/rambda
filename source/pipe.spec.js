import { filter } from './filter.js'
import { map } from './map.js'
import { pipe } from './pipe.js'

test('happy', () => {
  const result = pipe(
    [1, 2, 3],
    filter(x => x > 1),
    map(x => x * 10),
    map(x=> x + 1),
  )
  const expectedResult = [21, 31]

  expect(result).toEqual(expectedResult)
})
