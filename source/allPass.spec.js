import * as R from '../rambda.js'
import { allPass } from './allPass.js'

const list = [
  [1, 2, 3, 4],
  [3, 4, 5],
]
test('happy', () => {
  const result = R.pipe(list, R.filter(R.allPass([R.includes(2), R.includes(3)])))
  expect(result).toEqual([[1, 2, 3, 4]])
})

test('when returns false', () => {
  const result = R.pipe(list, R.filter(R.allPass([R.includes(12), R.includes(31)])))
  expect(result).toEqual([])
})
