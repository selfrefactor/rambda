import { pipe , includes} from 'rambda'

describe('R.includes', () => {
  it('happy', () => {
    const list = [{ a: { b: '1' } }, { a: { b: '2' } }, { a: { b: '3' } }]
    const result = pipe({ a: { b: '1' } }, includes(list))
    result // $ExpectType boolean
  })
  it('with string', () => {
    const result = pipe('oo', includes('foo'))
    result // $ExpectType boolean
  })
  it('with array of strings', () => {
		const result = pipe('1', includes(['1','2','3']))
    result // $ExpectType boolean
  })
})
