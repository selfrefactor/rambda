import {  evolve, pipe } from 'rambda'

it('R.evolve', () => {
  const input = {
		baz: 1,
    foo: 2,
    nested: {
      a: 1,
      bar: 3,
    },
  }
  const result = pipe(input, 
		evolve({
			foo: x => x + 1,
		})
	)
  result.foo // $ExpectType number
  result.baz // $ExpectType number
  result.nested.a // $ExpectType number
})
