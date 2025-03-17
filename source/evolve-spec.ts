import {  evolve, pipe } from 'rambda'

it('R.evolve', () => {
  const input = {
    foo: 2,
		baz: 'baz',
    nested: {
      a: 1,
      bar: 3,
    },
  }
  const result = pipe(input, 
		evolve({
			foo: x => x + 1,
			nested: {
				a: x => x + 1,
				bar: x => x + 1,
			},
		})
	)
  result.nested.a // $ExpectType number
  result.nested.bar // $ExpectType number
  result.foo // $ExpectType number
})
