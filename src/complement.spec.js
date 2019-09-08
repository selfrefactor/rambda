import { complement } from './complement'

test('', () => {
  const fn = complement(x => x.length === 0)

  expect(fn([ 1, 2, 3 ])).toBeTruthy()
})
