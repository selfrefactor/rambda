import { groupBy, groupByFallback } from './groupBy.js'

test.each(['constructor', '__proto__', 'toString', 'hasOwnProperty'])(
  'fallback supports the grouping key %s', key => {
    const items = ['first', 'second']
    const result = groupByFallback(() => key, items)
    expect(Object.hasOwn(result, key)).toBe(true)
    expect(result[key]).toEqual(items)
  },
)

test('fallback returns a null-prototype object like Object.groupBy', () => {
  expect(Object.getPrototypeOf(groupByFallback(x => x, []))).toBe(null)
})

test('groupBy uses the safe fallback when Object.groupBy is unavailable', () => {
  const nativeGroupBy = Object.groupBy
  Object.groupBy = undefined
  try {
    expect(groupBy(() => '__proto__')([1, 2]).__proto__).toEqual([1, 2])
  } finally {
    Object.groupBy = nativeGroupBy
  }
})
