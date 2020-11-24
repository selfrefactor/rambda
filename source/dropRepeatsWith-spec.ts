import {dropRepeatsWith} from 'rambda'

interface Foo {
  a: number,
}

describe('R.dropRepeatsWith', () => {
  it('happy', () => {
    const result = dropRepeatsWith(
      (x: Foo, y: Foo) => {
        return x.a > y.a
      },
      [{a: 2}, {a: 1}]
    )

    result // $ExpectType readonly { a: number; }[]
    result[0].a // $ExpectType number
  })
  it('curried', () => {
    const result = dropRepeatsWith((x: Foo, y: Foo) => {
      return x.a > y.a
    })([{a: 2}, {a: 1}])

    result // $ExpectType readonly Foo[]
  })
})
