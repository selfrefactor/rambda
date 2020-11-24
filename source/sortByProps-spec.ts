import {sortByProps} from 'rambda'

const list = [{a: {b: 3}}, {a: {b: 2}}, {a: {b: 1}}]

describe('R.sortByProps', () => {
  it('happy', () => {
    const result = sortByProps(['foo.bar', 'a.b'], list)

    result // $ExpectType readonly { a: { b: number; }; }[]
  })
  it('curried', () => {
    const result = sortByProps(['foo.bar', 'a.b'])(list)

    result // $ExpectType readonly { a: { b: number; }; }[]
  })
})
