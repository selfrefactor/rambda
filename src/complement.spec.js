import { any } from './any'
import { complement } from './complement'

test('', () => {
  const fn = complement(any(x => x === 2))

  expect(fn([ 1, 2, 3 ])).toBeFalsy()
})
