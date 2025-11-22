import { map, type MergeTypes, type MergeTypesAlternative, pipe, splitEvery } from 'rambda'

let a = pipe(
	[[1,2,3],[4,5,6]],
	map(splitEvery(2))
)
a

type DeepPick<T, K> = K extends keyof T
  ? { [P in K]: T[P] }
  : K extends `${infer A extends keyof T & string}.${infer B}`
    ? { [P in A]: DeepPick<T[A], B> }
    : never
type DeepPickAll<T, K extends string[]> = K extends [
  infer F,
  ...infer Rest extends string[],
]
  ? MergeTypes<DeepPick<T, F> & DeepPickAll<T, Rest>>
  : {}

type f = DeepPick<{ a: { b: { c: string } } }, 'a.b.c'>
type f2 = DeepPickAll<{ b: 1; a: { b: { c: string } } }, ['a.b', 'b']>
type f2s = MergeTypesAlternative<
  DeepPickAll<{ b: 1; a: { b: { c: string } } }, ['a.b.c', 'b']>
>

function deepPick<T, K extends string>(obj: T, key: K): DeepPick<T, K> {
  return key.split('.').reduce((acc: any, k: string) => {
    return acc?.[k]
  }, obj) as DeepPick<T, K>
}

const deepPickAll = <T, K extends string[]>(obj: T, keys: K): DeepPickAll<T, K> => {
  return null as any
}
const l = deepPick({ a: { b: { c: 1 } } }, 'a.b.c')
l.a.b.c
const l2 = deepPickAll({ a: { b: { c: 1 } } }, ['a.b.c'] as const)

type SnakeCase<T> = T extends `${infer F}${infer R}`
  ? F extends Uppercase<F>
    ? `_${Lowercase<F>}${SnakeCase<R>}`
    : `${F}${SnakeCase<R>}`
  : ''

type MapType<T extends readonly string[]> = T extends readonly [infer F, ...infer R]
  ? R extends readonly string[]
    ? [SnakeCase<F>, ...MapType<R>]
    : [SnakeCase<F>]
  : []

const mapToSnakeCase = <T extends readonly string[]>(str: T) => {
  return str.map(x => {
    return x.replace(/([A-Z])/g, '_$1').toLowerCase()
  }) as MapType<T>
}
it('R.map - with x', () => {
  const strings = ['fOo', 'bar', 'baz'] as const
  const result = pipe(strings, mapToSnakeCase)
  result
})
