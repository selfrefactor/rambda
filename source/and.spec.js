import { piped } from './piped.js'
import {and} from './and.js'

test('happy', () => {
  const result = piped(
		7,
		x => x > 6,
		and(x => x < 8)
	)
	expect(result).toBe(true)
})
