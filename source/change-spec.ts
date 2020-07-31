import {change} from 'rambda'

interface Origin {
  foo: number,
  bar: {
    nested: number,
  },
}
const origin: Origin = {
  foo: 1,
  bar: {nested: 2},
}
const changeData = {
  bar: {a: 3},
  baz: 4,
}

interface Output extends Origin {
  bar: {
    a: number,
    nested: number,
  },
  baz: number,
}

describe('R.change', () => {
  it('without expected type', () => {
    const result = change(origin, '', changeData)
    result // $ExpectType unknown
  })
  it('with expected type', () => {
    const result = change<Output>(origin, '', changeData)
    result // $ExpectType Output
  })
  it('with expected types for input and output', () => {
    const result = change<Origin, Output>(origin, '', changeData)
    result // $ExpectType Output
  })
})
