import { createObjectFromKeys, pipe } from 'rambda'

it('R.createObjectFromKeys', () => {
  it('with array as input', () => {
    const result = pipe(['a','b'] as const, createObjectFromKeys(x => x.length))
		result.a
  })
  it('with array as input', () => {
    const result = pipe(['a','b'], createObjectFromKeys(x => x.length))
		result.a
  })
})
