import {includes} from 'rambda'

const list = [{a: {b: '1'}}, {a: {c: '2'}}, {a: {b: '3'}}]

describe('R.includes', () => {
  it('happy', () => {
    const result = includes({a: {b: '1'}}, list)
    result // $ExpectType boolean
  })
  it('with string', () => {
    const result = includes('oo', 'foo')
    const curriedResult = includes('oo')('foo')

    result // $ExpectType boolean
    curriedResult // $ExpectType boolean
  })
})
