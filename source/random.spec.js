import { random } from './random.js'
import { range } from './range.js'
import { uniq } from './uniq.js'

test('happy', () => {
	const result = uniq(range(100).map(() => random(0, 3))).sort()
  expect(result).toEqual([0,1,2,3])
})

