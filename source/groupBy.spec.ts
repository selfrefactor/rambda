import { groupBy } from './groupBy'
import { pipe } from './pipe'

test('happy', () => {
  const groupByFn = (x: string) => String(x.length)
  const list = ['foo', 'bar']
  const result = pipe(list, groupBy(groupByFn))
  expectTypeOf(result).toEqualTypeOf<Partial<Record<string, string[]>>>()
  expect(result).toEqual({ '3': ['foo', 'bar'] })
})

test('with list', () => {
  const inventory = [
    { name: 'asparagus', type: 'vegetables', quantity: 9 },
    { name: 'bananas', type: 'fruit', quantity: 5 },
    { name: 'goat', type: 'meat', quantity: 23 },
    { name: 'cherries', type: 'fruit', quantity: 12 },
    { name: 'fish', type: 'meat', quantity: 22 },
  ]
  const result = groupBy(
    ({ quantity }: { quantity: number }) =>
      quantity < 6 ? 'restock' : 'sufficient'
  )(inventory)
  expect(result.restock).toEqual([
    { name: 'bananas', type: 'fruit', quantity: 5 },
  ])
  expect(result.sufficient![0]).toEqual(
    { name: 'asparagus', type: 'vegetables', quantity: 9 }
  )
})
