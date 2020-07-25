import {startsWith} from 'rambda'

const target = 'foo'
const input = 'foo bar'

describe('R.startsWith', () => {
  it('happy', () => {
    const result = startsWith(target, input)

    result // $ExpectType boolean
  })
  it('curried', () => {
    const result = startsWith(target)(input)

    result // $ExpectType boolean
  })
})
