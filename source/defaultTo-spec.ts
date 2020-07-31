import {defaultTo} from 'rambda'

describe('R.defaultTo with Ramda spec', () => {
  it('input is falsy', () => {
    const result = defaultTo('foo', undefined) // $ExpectType string
    result // $ExpectType "foo"
  })
  it('input is truthy', () => {
    const result = defaultTo('foo', 'bar')
    result // $ExpectType "foo" | "bar"
  })
})

describe('R.defaultTo can have many inputs', () => {
  it('happy', () => {
    const result = defaultTo('foo', undefined, 'bar')
    result // $ExpectType "foo" | "bar"
  })

  it('curried', () => {
    const result = defaultTo('foo')(undefined, 'bar')
    result // $ExpectType string
  })

  it('with two possible types', () => {
    const result = defaultTo<string, number>(
      'foo',
      undefined,
      1,
      null,
      2,
      'bar'
    ) // $ExpectType string | number
    result // $ExpectType string | number
  })
})
