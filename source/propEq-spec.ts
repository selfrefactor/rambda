import {propEq} from 'rambda'

const property = 'foo'
const numberProperty = 1
const value = 'bar'
const obj = {[property]: value}
const objWithNumberIndex = {[numberProperty]: value}

describe('R.propEq', () => {
  it('happy', () => {
    const result = propEq(value, property, obj)
    result // $ExpectType boolean
  })

  it('number is property', () => {
    const result = propEq(value, 1, objWithNumberIndex)
    result // $ExpectType boolean
  })

  it('with optional property', () => {
    interface MyType {
      optional?: string | number,
    }

    const myObject: MyType = {}
    const valueToFind = '1111'
    // @ts-expect-error
    propEq(valueToFind, 'optional', myObject)
  })

  it('imported from @types/ramda', () => {
    interface A {
      foo: string | null,
    }
    const obj: A = {
      foo: 'bar',
    }
    const value = ''
    const result = propEq(value, 'foo')(obj)
    result // $ExpectType boolean

    // @ts-expect-error
    propEq(value, 'bar')(obj)
  })
})
