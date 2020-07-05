import {includes} from 'ramda'

const list = [{a: {b: '1'}}, {a: {c: '2'}}, {a: {b: '3'}}]

describe('R.includes', () => {
  it('happy', () => {
    const result = includes({a: {b: '1'}}, list)
    /*
      should work:

      const resultCurried = includes({a: {b: '1'}})(list)
    */
    result // $ExpectType boolean
    result // $ExpectType boolean
  })
  it('with string', () => {
    const result = includes('oo', 'foo')
    const resultCurried = includes('oo')('foo')

    result // $ExpectType boolean
    resultCurried // $ExpectType boolean
  })
})
