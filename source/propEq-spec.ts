import {propEq} from 'rambda'

const property = 'foo'
const numberProperty = 1
const value = 'bar'
const obj = {[property]: value}
const objWithNumberIndex = {[numberProperty]: value}

describe('R.propEq', () => {
  it('happy', () => {
    const result = propEq(property, value, obj)
    result // $ExpectType boolean
  })

  it('number is property', () => {
    const result = propEq(1, value, objWithNumberIndex)
    result // $ExpectType boolean
  })

  it('with optional property', () => {
    interface MyType {
      optional?: string | number,
    }

    const myObject: MyType = {}
    const valueToFind = '1111'
    // $ExpectError
    propEq('optional', valueToFind, myObject)

    // $ExpectError
    propEq('optional', valueToFind, myObject)
  })

  it('imported from @types/ramda', () => {
    interface A {
      foo: string | null,
    }
    const obj: A = {
      foo: 'bar',
    }
    const value = ''
    const result = propEq('foo', value)(obj)
    result // $ExpectType boolean

    // $ExpectError
    propEq('bar', value)(obj)
  })
})
