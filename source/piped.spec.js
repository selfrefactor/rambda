import { add } from './add.js'
import { filter } from './filter.js'
import { map } from './map.js'
import { piped } from './piped.js'

test('happy', () => {
  const result = piped(
    [1, 2, 3],
    filter(x => x > 1),
    map(x => x * 10),
    map(add(1)),
  )
  const expectedResult = [21, 31]

  expect(result).toEqual(expectedResult)
})
