import { fromKeys, pipe } from 'rambda'

it('R.omitBy', () => {
  it('with array as input', () => {
    const result = pipe(['a','b'] as const, fromKeys(x => x.length))
		result.a
  })
  it('with array as input', () => {
    const result = pipe(['a','b'], fromKeys(x => x.length))
		result.a
  })
})
