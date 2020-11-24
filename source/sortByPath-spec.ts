import {sortByPath} from 'rambda'

interface Input {
  a: {b: number},
}

describe('R.sortByPath', () => {
  it('with string as path', () => {
    const input: Input[] = [{a: {b: 2}}, {a: {b: 1}}]
    const result = sortByPath('a.b', input)
    const curriedResult = sortByPath('a.b')(input)

    result // $ExpectType readonly Input[]
    curriedResult // $ExpectType readonly Input[]
    result[0].a.b // $ExpectType number
  })
  it('with list of strings as path', () => {
    const input: Input[] = [{a: {b: 2}}, {a: {b: 1}}]
    const result = sortByPath(['a', 'b'], input)
    const curriedResult = sortByPath(['a', 'b'])(input)

    result // $ExpectType readonly Input[]
    curriedResult // $ExpectType readonly Input[]
    result[0].a.b // $ExpectType number
  })
})
