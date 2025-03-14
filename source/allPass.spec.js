import { pipe } from './pipe.js'
import { filter } from './filter.js'
import { includes } from './includes.js'
import { allPass } from './allPass.js'

const list = [
  [1, 2, 3, 4],
  [3, 4, 5],
]
test('happy', () => {
  const result = pipe(list, filter(allPass([includes(2), includes(3)])))
  expect(result).toEqual([[1, 2, 3, 4]])
})

test('when returns false', () => {
  const result = pipe(list, filter(allPass([includes(12), includes(31)])))
  expect(result).toEqual([])
})
