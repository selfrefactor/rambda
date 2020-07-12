import {endsWith} from 'rambda'

const target = 'foo'
const input = 'foo bar'

describe('R.endsWith', () => {
  it('happy', () => {
    const result = endsWith(target, input)

    result // $ExpectType boolean
  })
  it('curried', () => {
    const result = endsWith(target)(input)

    result // $ExpectType boolean
  })
})
