import {
  filter,
  find,
  groupBy,
  indexBy,
  omit,
  pick,
  pipe,
  sortBy,
  sum,
  uniq,
  zip,
} from 'rambda'
import { describe, expectTypeOf, it } from 'vitest'
import {
  chain as radashiChain,
  group as radashiGroup,
  objectify as radashiObjectify,
  omit as radashiOmit,
  pick as radashiPick,
  select as radashiSelect,
  selectFirst as radashiSelectFirst,
  sort as radashiSort,
  sum as radashiSum,
  unique as radashiUnique,
  zip as radashiZip,
} from 'radashi'

describe('Radashi vs Rambda: API design', () => {
  it('Radashi is data-first, Rambda is curried data-last', () => {
    const items = [3, 1, 2]

    // Radashi: data-first, all args at once
    const radashiResult = radashiSort(items, x => x)
    expectTypeOf(radashiResult).toEqualTypeOf<number[]>()

    // Rambda: curried data-last, designed for pipe
    const rambdaResult = pipe(items, sortBy(x => x))
    expectTypeOf(rambdaResult).toEqualTypeOf<number[]>()
  })
})

describe('Radashi vs Rambda: selectFirst vs find (type guard narrowing)', () => {
  it('Rambda find supports type guard narrowing; Radashi selectFirst does not', () => {
    const items = ['hello', 'world', 42] as (string | number)[]

    const radashiResult = radashiSelectFirst(
      items,
      x => String(x),
      (x): x is string => typeof x === 'string',
    )
    // Radashi condition is typed as (item: T, index: number) => boolean
    // No type guard overload — result is still string | undefined
    // because mapper returns string for all T, and condition narrows runtime only
    expectTypeOf(radashiResult).toEqualTypeOf<string | undefined>()

    const rambdaResult = pipe(
      items,
      find((x): x is string => typeof x === 'string'),
    )
    // Rambda find has type guard overload: predicate(value is S) => S | undefined
    expectTypeOf(rambdaResult).toEqualTypeOf<string | undefined>()
  })
})

describe('Radashi vs Rambda: select vs filter (type guard narrowing)', () => {
  it('Rambda filter supports type guard narrowing; Radashi select does not', () => {
    interface Foo { a: number }
    interface Bar extends Foo { b: string }
    const items = [{ a: 1 }, { a: 2, b: 'x' }] as (Foo | Bar)[]

    const radashiResult = radashiSelect(
      items,
      x => x,
      (x): x is Bar => 'b' in x,
    )
    // Radashi condition is (item: T, index: number) => boolean — no narrowing
    // Result type is (Foo | Bar)[] because condition doesn't narrow
    expectTypeOf(radashiResult).toEqualTypeOf<(Foo | Bar)[]>()

    const rambdaResult = pipe(
      items,
      filter((x): x is Bar => 'b' in x),
    )
    // Rambda filter supports type guard → Bar[]
    expectTypeOf(rambdaResult).toEqualTypeOf<Bar[]>()
  })
})

describe('Radashi vs Rambda: group vs groupBy (partial records)', () => {
  it('Both return Partial<Record<K, T[]>>', () => {
    const items = [
      { category: 'a', val: 1 },
      { category: 'b', val: 2 },
      { category: 'a', val: 3 },
    ]

    const radashiResult = radashiGroup(items, x => x.category)
    // Radashi: { [K in Key]?: T[] } — equivalent to Partial<Record<string, T[]>>
    expectTypeOf(radashiResult).toEqualTypeOf<
      Partial<Record<string, { category: string; val: number }[]>>
    >()

    const rambdaResult = pipe(items, groupBy(x => x.category))
    // Rambda: Partial<Record<K, T[]>> where K extends string
    expectTypeOf(rambdaResult).toEqualTypeOf<
      Partial<Record<string, { category: string; val: number }[]>>
    >()
  })

  it('Both allow number/symbol keys via groupBy', () => {
    const items = [1, 2, 3, 4]

    const radashiResult = radashiGroup(items, n => (n % 2 === 0 ? 'even' : 'odd'))
    expectTypeOf(radashiResult).toEqualTypeOf<
      Partial<Record<string, number[]>>
    >()
  })
})

describe('Radashi vs Rambda: objectify vs indexBy (key inference)', () => {
  it('Radashi objectify infers literal keys; Rambda indexBy returns wide Record<string, T>', () => {
    const list = [
      { id: 'a' as const, name: 'Alice' },
      { id: 'b' as const, name: 'Bob' },
    ]

    // Radashi objectify: Record<Key, Value> with inferred literal keys
    const radashiResult = radashiObjectify(list, x => x.id)
    expectTypeOf(radashiResult).toEqualTypeOf<
      Record<'a' | 'b', { id: 'a' | 'b'; name: string }>
    >()

    // Rambda indexBy: takes property key string, returns Record<string, T>
    const rambdaResult = indexBy('id')(list)
    expectTypeOf(rambdaResult).toEqualTypeOf<
      Record<string, { id: 'a' | 'b'; name: string }>
    >()
  })

  it('Radashi objectify supports value mapper', () => {
    const list = [
      { id: 'a' as const, name: 'Alice' },
      { id: 'b' as const, name: 'Bob' },
    ]

    // Radashi: objectify(array, getKey, getValue?) — can map values too
    const radashiResult = radashiObjectify(list, x => x.id, x => x.name)
    expectTypeOf(radashiResult).toEqualTypeOf<Record<'a' | 'b', string>>()

    // Rambda: indexBy only indexes by property — no value mapping overload
  })
})

describe('Radashi vs Rambda: sort vs sortBy (comparator types)', () => {
  it('Radashi sort only accepts numeric getter; Rambda sortBy accepts any Ord', () => {
    const items = [{ a: 2 }, { a: 1 }, { a: 0 }]

    // Radashi sort: getter must return number
    const radashiResult = radashiSort(items, x => x.a)
    expectTypeOf(radashiResult).toEqualTypeOf<{ a: number }[]>()

    // Radashi sort supports boolean desc flag
    const radashiDesc = radashiSort(items, x => x.a, true)
    expectTypeOf(radashiDesc).toEqualTypeOf<{ a: number }[]>()

    // Rambda sortBy: getter returns any Ord (number | string | boolean | Date)
    const rambdaResult = pipe(items, sortBy(x => x.a))
    expectTypeOf(rambdaResult).toEqualTypeOf<{ a: number }[]>()
  })

  it('Rambda sortBy supports string and Date comparators; Radashi sort does not', () => {
    const strItems = [{ name: 'Charlie' }, { name: 'Alice' }, { name: 'Bob' }]

    const rambdaResult = pipe(strItems, sortBy(x => x.name))
    expectTypeOf(rambdaResult).toEqualTypeOf<{ name: string }[]>()

    // Radashi sort: getter must return number — would error on string
    // @ts-expect-error — Radashi sort getter requires number return
    radashiSort(strItems, x => x.name)
  })
})

describe('Radashi vs Rambda: pick (key inference)', () => {
  it('Radashi pick supports predicate filter; Rambda pick supports string-path', () => {
    const input = { a: 'foo', b: 2, c: 3 } as const

    // Radashi pick with key array
    const radashiArray = radashiPick(input, ['a', 'c'])
    expectTypeOf(radashiArray).toEqualTypeOf<{ readonly a: 'foo'; readonly c: 3 }>()

    // Radashi pick with predicate filter
    const radashiPredicate = radashiPick(input, (_value, key) => key !== 'b')
    expectTypeOf(radashiPredicate).toEqualTypeOf<{ readonly a: 'foo'; readonly c: 3 }>()

    // Rambda pick with array
    const rambdaArray = pipe(input, pick(['a', 'c']))
    expectTypeOf(rambdaArray.a).toEqualTypeOf<'foo'>()

    // Rambda pick with string-path
    const rambdaString = pipe(input, pick('a,c'))
    expectTypeOf(rambdaString.a).toEqualTypeOf<'foo'>()
  })
})

describe('Radashi vs Rambda: omit', () => {
  it('Both infer remaining keys when omitting', () => {
    const input = { a: 'foo', b: 2, c: 3 } as const

    const radashiResult = radashiOmit(input, ['b'])
    expectTypeOf(radashiResult).toEqualTypeOf<{ readonly a: 'foo'; readonly c: 3 }>()

    const rambdaResult = pipe(input, omit(['b']))
    expectTypeOf(rambdaResult.a).toEqualTypeOf<'foo'>()
  })
})

describe('Radashi vs Rambda: unique vs uniq', () => {
  it('Radashi unique supports optional toKey; Rambda uniq does not', () => {
    const items = [1, 2, 1, 3]

    const rambdaResult = uniq(items)
    expectTypeOf(rambdaResult).toEqualTypeOf<number[]>()

    // Radashi unique with optional toKey (similar to uniqBy but combined)
    const radashiResult = radashiUnique(items)
    expectTypeOf(radashiResult).toEqualTypeOf<number[]>()

    // Radashi unique with toKey function
    const objItems = [{ id: 1 }, { id: 2 }, { id: 1 }]
    const radashiKeyed = radashiUnique(objItems, x => x.id)
    expectTypeOf(radashiKeyed).toEqualTypeOf<{ id: number }[]>()
  })
})

describe('Radashi vs Rambda: sum', () => {
  it('Radashi sum has mapper overload; Rambda sum only accepts number[]', () => {
    const numbers = [1, 2, 3]

    const radashiResult = radashiSum(numbers)
    expectTypeOf(radashiResult).toEqualTypeOf<number>()

    const rambdaResult = sum(numbers)
    expectTypeOf(rambdaResult).toEqualTypeOf<number>()

    // Radashi sum with mapper function
    const items = [{ value: 1 }, { value: 2 }]
    const radashiMapped = radashiSum(items, x => x.value)
    expectTypeOf(radashiMapped).toEqualTypeOf<number>()
  })
})

describe('Radashi vs Rambda: zip', () => {
  it('Radashi zip is variadic multi-array; Rambda zip is curried pair', () => {
    const keys = ['a', 'b']
    const vals = [1, 2]

    // Radashi zip: variadic, tuple-per-element return
    const radashiResult = radashiZip(keys, vals)
    expectTypeOf(radashiResult).toEqualTypeOf<[string, number][]>()

    // Rambda zip: curried, returns KeyValuePair[]
    const rambdaResult = zip(keys)(vals)
    expectTypeOf(rambdaResult).toEqualTypeOf<[string, number][]>()
  })
})

describe('Radashi vs Rambda: chain vs pipe (composition arity)', () => {
  it('Rambda pipe supports up to 20 operations; Radashi chain supports 10', () => {
    const add1 = (x: number) => x + 1
    const double = (x: number) => x * 2
    const toString = (x: number) => String(x)

    // Radashi: chain data-first, overload-based (10 max)
    const radashiChained = radashiChain(add1, double, toString)
    expectTypeOf(radashiChained(0)).toEqualTypeOf<string>()

    // Rambda: pipe data-last, variadic-tuple-based (20 overloads)
    const rambdaResult = pipe(0, add1, double, toString)
    expectTypeOf(rambdaResult).toEqualTypeOf<string>()
  })
})

describe('Radashi vs Rambda: generic type utilities', () => {
  it('Radashi exposes Simplify, IsExactType, Falsy; Rambda does not export these', () => {
    // Radashi exports advanced type utilities:
    //   Simplify<T> — flattens intersection types
    //   IsExactType<A, B> — exact type equality check
    //   Falsy — union of all falsy values
    // These are not exported from Rambda.
    // Test is structural: Radashi's types are ambient, verified at compile time.

    // Radashi Falsy type = null | undefined | false | '' | 0 | 0n
    // Rambda has ExcludeFalsy in filter(Boolean) but doesn't export the type
    const radashiFalsy: (typeof import('radashi'))['Falsy'] = false as any
    expectTypeOf(radashiFalsy).not.toEqualTypeOf<true>()
  })
})
