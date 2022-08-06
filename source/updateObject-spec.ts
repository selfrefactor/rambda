import {updateObject} from 'rambda'

const obj = {
  a: {b: 1},
}
const rules: [string, number][] = [
  ['a.b', 2],
  ['foo.bar', 20],
]
interface Output {
  a: {b: number},
  foo: {bar: number},
}

describe('R.updateObject', () => {
  it('happy', () => {
    const result = updateObject<Output>(rules, obj)

    result // $ExpectType Output
  })
  it('curried', () => {
    const result = updateObject<Output>(rules)(obj)

    result // $ExpectType Output
  })
})
