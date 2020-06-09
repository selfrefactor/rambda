import {propEq} from 'rambda'

const property = 'foo'
const numberProperty = 1
const value = 'bar'
const obj = { [property]: value }
const objWithNumberIndex = { [numberProperty]: value }

describe('propEq', () => {
  it('happy', () => {
    const result = propEq(
      property, value, obj
    )
    result // $ExpectType boolean
  })
  it('number is property', () => {
    const result = propEq(
      1, value, objWithNumberIndex
    )
    result // $ExpectType boolean
  })
  it('with optional property', () => {
    interface MyType {
        optional?: string | number;
    }
    
    const myObject: MyType = {};
    const valueToFind = '1111';
    const optionalValueToFind: string | number | undefined = '1111';
    const result = propEq('optional', valueToFind, myObject)
    const result2 = propEq('optional', optionalValueToFind, myObject)
    result // $ExpectType boolean
    result2 // $ExpectType boolean
  })
})
