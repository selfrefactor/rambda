import { eqProps, pipe } from 'rambda'

const obj1 = { a: { b: 1 }, c: 2 }
const obj2 = { a: { b: 1 }, c: 3 }

it('R.eqProps', () => {
    const result = pipe(
		obj1,
		eqProps('a', obj2)
	)

    result // $ExpectType boolean
})
