import { filter, groupBy, indexBy, map, pick, pipe, sortBy, find } from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'
import {
  drop as remedaDrop,
  filter as remedaFilter,
  find as remedaFind,
  groupBy as remedaGroupBy,
  indexBy as remedaIndexBy,
  map as remedaMap,
  sortBy as remedaSortBy,
} from 'remeda'

describe('Remeda vs Rambda: type guard narrowing', () => {
  it('find - Rambda lacks type guard narrowing', () => {
    const items = ['hello', 'world', 42] as (string | number)[]

    const result = pipe(
      items,
      remedaFind((x): x is string => typeof x === 'string'),
    )
    const resultRambda = pipe(
      items,
      find((x): x is string => typeof x === 'string'),
    )
    // Remeda: find<T, S extends T>(predicate: value is S) => S | undefined
    //   -> narrows to string | undefined
    // Rambda: find<T>(predicate: (x: T) => boolean) => T | undefined
    //   -> would type as (string | number) | undefined
    expectTypeOf(result).toEqualTypeOf<string | undefined>()
  })
})

describe('Remeda vs Rambda: tuple preservation', () => {
  it('drop - Remeda preserves tuple length', () => {
    const tuple = [1, 2, 3, 4] as const
    // Remeda: drop<T, N>(array: T, n: N) => Drop<T, N>
    //   -> Drop<readonly [1,2,3,4], 2> = readonly [3, 4]
    const result = remedaDrop(tuple, 2)
    expectTypeOf(result).toEqualTypeOf<readonly [3, 4]>()
    // Rambda: drop<T>(howMany: number) => (list: T[]) => T[]
    //   -> would type as number[]
  })

  it('drop - works inside Rambda pipe', () => {
    const result = pipe(
      [1, 2, 3, 4] as const,
      remedaDrop(2),
    )
    expectTypeOf(result).toEqualTypeOf<readonly [3, 4]>()
  })

  it('map - Remeda preserves tuple length', () => {
    const tuple = [1, 2, 3] as const
    // Remeda: map(data, fn) => Mapped<T, U>
    //   preserves tuple: [number, number, number]
    const remedaResult = remedaMap(tuple, x => x + 1)
    expectTypeOf(remedaResult).toEqualTypeOf<[number, number, number]>()

    // Rambda: map(fn)(data) => Mapped<T, U>
    //   also returns [number, number, number] for const tuples
    const rambdaResult = map((x: number) => x + 1)(tuple)
    // Rambda can preserve tuple too via Mapped type
    expectTypeOf(rambdaResult).toEqualTypeOf<[number, number, number]>()
  })
})

describe('Remeda vs Rambda: sortBy multi-criteria', () => {
  it('sortBy - Remeda supports multiple criteria and desc', () => {
    const items = [
      { color: 'red', weight: 2 },
      { color: 'blue', weight: 1 },
      { color: 'green', weight: 1 },
    ]

    // Remeda: sortBy(data, fn1, [fn2, 'desc'], ...) => ReorderedArray<T>
    const sorted = remedaSortBy(
      items,
      x => x.weight,
      // SUGGESTION: Rename 'asc'/'desc' to 'ascending'/'descending' for clarity
      [x => x.color, 'desc' as const],
    )
    expectTypeOf(sorted).toEqualTypeOf<typeof items>()
    expectTypeOf(sorted[0].weight).toEqualTypeOf<number>()

    // Rambda: only single criterion
    const rambdaSorted = sortBy((x: { color: string; weight: number }) => x.weight)(items)
    expectTypeOf(rambdaSorted).toEqualTypeOf<typeof items>()
  })
})

describe('Remeda vs Rambda: groupBy key inference', () => {
  it('groupBy - Remeda uses NonEmptyArray for values', () => {
    const items = [
      { category: 'a', val: 1 },
      { category: 'b', val: 2 },
      { category: 'a', val: 3 },
    ]

    // Remeda: groupBy returns Record<Key, NonEmptyArray<T>>
    // Key is string (widened), so no Partial (BoundedPartial = identity)
    const remedaResult = remedaGroupBy(items, x => x.category)
    expectTypeOf(remedaResult).toEqualTypeOf<
      Record<string, [{ category: string; val: number }, ...{ category: string; val: number }[]]>
    >()

    // Rambda: groupBy<T, K extends string = string> => Partial<Record<K, T[]>>
    const rambdaGrouped = pipe(items, groupBy(x => x.category))
    expectTypeOf(rambdaGrouped).toEqualTypeOf<
      Partial<Record<string, { category: string; val: number }[]>>
    >()
  })
})

describe('Remeda vs Rambda: filter nuances', () => {
  it('filter(Boolean) - Remeda has no ExcludeFalsy', () => {
    const list = [1, true, false] as const

    // Remeda: filter returns T[number][] for boolean predicates
    const remedaResult = remedaFilter(list, Boolean)
    // Remeda doesn't narrow — returns all element types including false
    expectTypeOf(remedaResult).toEqualTypeOf<(1 | true | false)[]>()

    // Rambda: filter(Boolean) uses ExcludeFalsy which excludes 'true' literal
    const rambdaResult = filter(Boolean)(list)
    // @ts-expect-error - Rambda's ExcludeFalsy excludes true
    expectTypeOf(rambdaResult).toEqualTypeOf<(1 | true)[]>()
    // Actual type: 1[] -- bug: ExcludeFalsy<1 | true | false> = 1
    expectTypeOf(rambdaResult).toEqualTypeOf<1[]>()
  })
})

describe('Remeda vs Rambda: indexBy key inference', () => {
  it('indexBy - Remeda infers literal keys', () => {
    const list = [
      { id: 'a' as const, name: 'Alice' },
      { id: 'b' as const, name: 'Bob' },
    ]

    // Remeda: indexBy(data, fn) => BoundedPartial<Record<Key, T>>
    // infers literal keys 'a' | 'b', applies Partial via BoundedPartial
    const remedaResult = remedaIndexBy(list, x => x.id)
    expectTypeOf(remedaResult).toEqualTypeOf<
      Partial<Record<'a' | 'b', (typeof list)[number]>>
    >()

    // Rambda: indexBy(property)(list) => Record<string, T>
    // Takes a property key string, not a function
    const rambdaResult = indexBy('id')(list)
    expectTypeOf(rambdaResult).toEqualTypeOf<
      Record<string, { id: 'a' | 'b'; name: string }>
    >()
  })
})
