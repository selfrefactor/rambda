import { IterableContainer, map, pipe,Mapped, MergeTypes, MergeTypesAlternative } from 'rambda'

const list = [1, 2, 3]
type ToFunctions<T> = T extends [infer E] ? (a: E) => void : never;
type DeepPick<T, K> = K extends keyof T ? { [P in K]: T[P] } : K extends `${infer A extends keyof T & string}.${infer B}` ? { [P in A]: DeepPick<T[A], B> }
: never
type DeepPickAll<T, K extends string[]> = K extends [infer F, ...infer Rest extends string[]] ? MergeTypes<DeepPick<T, F> & DeepPickAll<T, Rest>> : {}

type f = DeepPick<{ a: { b: { c: string } } }, 'a.b.c'>
type f2 = DeepPickAll<{ b: 1,a: { b: { c: string } } }, ['a.b', 'b']>
type f2s = MergeTypesAlternative<DeepPickAll<{ b: 1,a: { b: { c: string } } }, ['a.b.c', 'b']>>


function deepPick<T, K extends string>(obj: T, key: K): DeepPick<T, K> {
	return key.split('.').reduce((acc: any, k: string) => {
		return acc?.[k]
	}, obj) as DeepPick<T, K>
}

function deepPickAll<T, K extends string[]>(obj: T, keys: K): MergeTypes<DeepPickAll<T, K>> {
	return keys.reduce((acc, key) => {
		return { ...acc, ...deepPick(obj, key) }
	}, {} as MergeTypes<DeepPickAll<T, K>>)
}

let l = deepPick({ a: { b: { c: 1 } } }, 'a.b.c')
l.a.b.c
let l2 = deepPickAll({ a: { b: { c: 1 } } }, ['a.b.c', 'a.b'])
let l3 = deepPickAll({ a: { b: { c: 1 } } }, ['a.b.c', 'a.b'])
let l4 = deepPickAll({ a: { b: { c: 1 } } }, ['a.b.c', 'a.b'])
let l5 = deepPickAll({ a: { b: { c: 1 } } }, ['a.b.c', 'a.b'])
let l6 = deepPickAll({ a: { b: { c: 1 } } }, ['a.b.c', 'a.b'])
let l7 = deepPickAll({ a: { b: { c: 1 } } }, ['a.b.c', 'a.b'])
let l8 = deepPickAll({ a: { b: { c: 1 } } }, ['a.b.c', 'a.b'])




type SnakeCase<T> = T extends `${infer F}${infer R}`
? F extends Uppercase<F>
? `_${Lowercase<F>}${SnakeCase<R>}`
: `${F}${SnakeCase<R>}`
: "";

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
	const strings = ['fOo', 'bar', 'baz'] as const;
	const result = pipe(
		strings,
		mapToSnakeCase,
	)
	result // $ExpectType string[]
})

it('R.map - within pipe', () => {
  const result = pipe(
    list,
    x => x,
    map(x => {
      x // $ExpectType number
      return String(x)
    }),
  )
  result // $ExpectType string[]
})


it('R.map - without pipe', () => {
  map(x => {
    x // $ExpectType unknown
  })([1, 2, 3])
})

it('R.map - without pipe but explicitly typed', () => {
  const result = map<number[], string>(x => {
    x // $ExpectType number[]
    return String(x)
  })([1, 2, 3])
  result // $ExpectType string[]
})

