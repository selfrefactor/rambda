import { partition, pipe } from 'rambda'

describe('R.partition', () => {
	it('happy', () => {
    const predicate = (x: number) => {
      return x > 2
    }
    const list = [1, 2, 3, 4]

    const result = pipe(list, partition(predicate))
    result // $ExpectType [number[], number[]]
	})
	it('with simple object', () => {
		let result = pipe(
			[{a: 1}, {a: 2}, {a: 3}, {a: 4}],
			partition(x => x.a > 2)
		)
		result // $ExpectType [{ a: number; }[], { a: number; }[]]
	})
	it('with complex object', () => {
		interface Foo {
			a: number
		}
		interface Bar {
			b: number
		}
		let list1: (Foo|Bar)[] = [
			{a: 1},
			{b: 2},
			{a: 3},
			{b: 4},
		]
		let filterFoo = (x: Foo|Bar): x is Foo => 'a' in x
		let result = pipe(
			list1,
			partition(filterFoo)
		)
		result // $ExpectType [Foo[], Bar[]]
})
})
