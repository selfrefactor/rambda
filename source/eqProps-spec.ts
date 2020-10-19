import {eqProps} from 'rambda'

const obj1 = {a: {b: 1}, c: 2}
const obj2 = {a: {b: 1}, c: 3}

describe('R.eqProps', () => {
  it('happy', () => {
    const result = eqProps('a', obj1, obj2)

    result // $ExpectType boolean
  })
  it('curried', () => {
    const result = eqProps('a', obj1)(obj2)

    result // $ExpectType boolean
  })
})
