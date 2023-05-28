import {endsWith} from 'rambda'

describe('R.endsWith - array', () => {
  const target = [{a: 2}]
  const input = [{a: 1}, {a: 2}]
  it('happy', () => {
    const result = endsWith(target, input)

    result // $ExpectType boolean
  })
  it('curried', () => {
    const result = endsWith(target)(input)

    result // $ExpectType boolean
  })
})

describe('R.endsWith - string', () => {
  const target = 'bar'
  const input = 'foo bar'
  it('happy', () => {
    const result = endsWith(target, input)

    result // $ExpectType boolean
  })
  it('curried', () => {
    const result = endsWith(target)(input)

    result // $ExpectType boolean
  })
})
