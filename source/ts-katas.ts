import { IterableContainer, map, pipe,Mapped, MergeTypes } from 'rambda'

const list = [1, 2, 3]
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

