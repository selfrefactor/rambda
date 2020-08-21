import {assocPath} from 'rambda'

interface Output {
  a: number,
  foo: {bar: number},
}

describe('R.assocPath - user must explicitly set type of output', () => {
  it('with array as path input', () => {
    const result = assocPath<Output>(['foo', 'bar'], 2, {a: 1})

    result // $ExpectType Output
  })
  it('with string as path input', () => {
    const result = assocPath<Output>('foo.bar', 2, {a: 1})

    result // $ExpectType Output
  })
})

describe('R.assocPath - curried', () => {
  it('with array as path input', () => {
    const result = assocPath<Output>(['foo', 'bar'], 2)({a: 1})

    result // $ExpectType Output
  })
  it('with string as path input', () => {
    const result = assocPath<Output>('foo.bar', 2)({a: 1})

    result // $ExpectType Output
  })
})
