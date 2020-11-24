import {sortObject} from 'rambda'

const obj = {
  c: 1,
  a: 2,
  b: 3,
}

describe('R.sortObjectEvery', () => {
  it('predicate with all arguments', () => {
    const result = sortObject((propA, propB, valueA, valueB) => {
      propA // $ExpectType string
      propB // $ExpectType string
      valueA // $ExpectType number
      valueB // $ExpectType number
      return propA > propB ? -1 : 1
    }, obj)

    result // $ExpectType { readonly [keyOutput: string]: number; }
  })

  it('predicate with only property arguments', () => {
    const result = sortObject((propA, propB) => {
      propA // $ExpectType string
      propB // $ExpectType string
      return propA > propB ? -1 : 1
    }, obj)

    result // $ExpectType { readonly [keyOutput: string]: number; }
  })
})

describe('R.sortObjectEvery - curried version needs to pass a type', () => {
  it('predicate with all arguments', () => {
    const result = sortObject<number>((propA, propB, valueA, valueB) => {
      propA // $ExpectType string
      propB // $ExpectType string
      valueA // $ExpectType number
      valueB // $ExpectType number
      return propA > propB ? -1 : 1
    })(obj)

    result // $ExpectType { readonly [keyOutput: string]: number; }
  })

  it('predicate with only property arguments', () => {
    const result = sortObject<number>((propA, propB) => {
      propA // $ExpectType string
      propB // $ExpectType string
      return propA > propB ? -1 : 1
    })(obj)

    result // $ExpectType { readonly [keyOutput: string]: number; }
  })
})
