import { compact } from './compact'
import { pipe } from './pipe'

test('happy', () => {
  const result = pipe(
		{
			a: [ undefined, 'a', 'b', 'c'],
			b: [1,2, null, 0, undefined, 3],
			c: { a: 1, b: 2, c: 0, d: undefined, e: null, f: false },
		},
		x => ({
			a: compact(x.a),
			b: compact(x.b),
			c: compact(x.c)
		})
	)
	expect(result.a).toEqual(['a', 'b', 'c'])
	expect(result.b).toEqual([1,2,0,3])
	expect(result.c).toEqual({ a: 1, b: 2,c:0, f: false })
})