import { assocPath, dissocPath } from 'rambda'

describe('R.assocPath - needs explicit output type', () => {
  interface Output {
    a: number
    foo: { bar: number }
  }
  it('happy', () => {
    const result = assocPath<Output>('foo.bar', 2, { a: 1 })
    result // $ExpectType Output
  })
  it('curried', () => {
    const result = assocPath<Output>('foo.bar', 2)({ a: 1 })
    result // $ExpectType Output
  })
})

describe('R.dissocPath - needs explicit output type', () => {
  interface Output {
    a: number
    foo: { b: number }
  }
  it('happy', () => {
    const result = dissocPath<Output>('foo.bar', {
      a: 1,
      foo: { b: 2, bar: 3 },
    })
    result // $ExpectType Output
  })
  it('curried', () => {
    const result = dissocPath<Output>('foo.bar')({
      a: 1,
      foo: { b: 2, bar: 3 },
    })
    result // $ExpectType Output
  })
})
