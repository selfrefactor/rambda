import {concat, mergeWith} from 'rambda'

interface Output {
  a: boolean,
  b: boolean,
  values: number[],
}
const A = {
  a: true,
  values: [10, 20],
}
const B = {
  b: true,
  values: [15, 35],
}
describe('R.mergeWith', () => {
  test('with explicit types', () => {
    const result = mergeWith(concat, A, B)
    result // $ExpectType any
  })
  test('without explicit types', () => {
    const result = mergeWith<Output>(concat, A, B)
    result // $ExpectType Output
  })
})
