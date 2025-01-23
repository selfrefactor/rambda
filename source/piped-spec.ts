import {assoc, assocPath, both, defaultTo, difference, piped, tap, head} from 'rambda'
type IsNotNever<T> = [T] extends [never] ? false : true;
type Expect<T extends true> = T

function check<T>(predicate: (x: T) => boolean, fallback : T) : (input: T) => T{
	return input => {
		if(predicate(input)){
			return input
		}
		return fallback
	}
}


describe('real use cases', () => {
	it('assoc', () => {
		let input = {
			a: 'foo',
			b: 2
		}
		interface AfterAssoc{
			a: string,
			b: number,
			c: number
		}
		interface AfterAssocPath extends AfterAssoc{
			d: {
				e: number
			}
		}
		let foo: AfterAssocPath = {
			a: 'foo',
			b: 2,
			c: 3,
			d: {
				e: 4
			}
		}
		let bar: AfterAssocPath = {
			a: 'bar',
			b: 2,
			c: 3,
			d: {
				e: 4
			}
		}
		let baz = {
			a: 'baz',
			b: 1,
			c: 1,
			d: {
				e: 1
			}
		}
		const result = piped(
			input,
			assoc('c', 3),
			tap(x => {
				x.a // $ExpectType string
				x.c // $ExpectType number
			}),
			assocPath<AfterAssocPath>('d.e', 4),
			defaultTo(
				foo
			),
			check(both(x => x.b > 1, x => x.b < 11),baz),
			x => ([x]),
			difference([bar]),
			head
		)
		let final: Expect<IsNotNever<typeof result>> = true
		final // $ExpectType true
	})
})


describe('R.piped', () => {
  it('happy', () => {
    const result = piped(
      [1, 2],
      x => {
        return x.length + 1
      },
      x => {
        return x + 10
      }
    )

    result // $ExpectType number
  })
  it('issue #63', () => {
    const result = piped(1, x => x)

    result // $ExpectType number
  })
})

describe('piped', () => {
  it('should pipe functions from left to right', () => {
    const result = piped(
      1,
      x => x + 1,
      x => x * 2,
      x => `Result: ${x}`
    );
    expect(result).toBe('Result: 4');
  });
});
