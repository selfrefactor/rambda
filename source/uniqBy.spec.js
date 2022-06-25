import { uniqBy } from './uniqBy.js'

test('returns a set from any array based on predicate', () => {
  const result = uniqBy(Math.abs, [ -2, -1, 0, 1, 2 ])
  console.log(result, 'result')
})

test('keeps elements from the left', () => {
  const result = uniqBy(Math.abs, [ -1, 2, 4, 3, 1, 3 ])
  console.log(result, 'result')
})

test('returns an empty array for an empty array', () => {
  const result = uniqBy(Math.abs, [])
  console.log(result, 'result')
})
