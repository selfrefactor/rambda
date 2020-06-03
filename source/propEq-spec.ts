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
})
