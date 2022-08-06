import {maybe} from 'rambda'

const foo: any = {a: 1}

describe('R.maybe', () => {
  it('happy', () => {
    const ifRule = true
    const result = maybe(ifRule, foo.b ? 1 : 2, 3)

    result // $ExpectType 1 | 2 | 3
  })
  it('can explicitly pass a type', () => {
    const ifRule = true
    const result = maybe<number>(ifRule, () => foo.b ? 1 : 2, 3)

    result // $ExpectType number
  })
  it('ifRule is a function', () => {
    const ifRule = () => true
    const result = maybe(ifRule, () => foo.b ? 1 : 2, 3)

    result // $ExpectType 1 | 2 | 3
  })
  it('all inputs are functions', () => {
    const ifRule = () => true
    const result = maybe(
      ifRule,
      () => foo.b ? 1 : 2,
      () => 3
    )

    result // $ExpectType number
  })
})
