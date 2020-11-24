import {props} from 'rambda'

const obj = {a: 1, b: 2}

describe('R.props', () => {
  it('happy', () => {
    const result = props(['a', 'b'], obj)

    result // $ExpectType readonly number[]
  })
  it('curried', () => {
    const result = props(['a', 'b'])(obj)

    result // $ExpectType readonly number[]
  })
})
