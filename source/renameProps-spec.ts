import { renameProps } from 'rambda'

const rules = {
  f: 'foo',
  b: 'bar',
}
const input = {
  f: 1,
  b: 2,
}

describe('R.renameProps', () => {
  it('happy', () => {
    const result = renameProps(rules, input)

    result // $ExpectType object
  })
  it('curried', () => {
    const result = renameProps(rules)(input)

    result // $ExpectType object
  })
})

describe('R.renameProps - explicitly passed output type', () => {
  interface Output {
    foo: number
    bar: number
  }

  it('happy', () => {
    const result = renameProps<Output>(rules, input)

    result // $ExpectType Output
  })
  it('curried', () => {
    const result = renameProps<Output>(rules)(input)

    result // $ExpectType Output
  })
})
