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
  test('no curry | without explicit types', () => {
    const result = mergeWith(concat, A, B)
    result // $ExpectType Obj
  })
  test('no curry | with explicit types', () => {
    const result = mergeWith<Output>(concat, A, B)
    result // $ExpectType Output
  })
  test('curry 1 | without explicit types', () => {
    const result = mergeWith(concat, A)(B)
    result // $ExpectType Obj
  })
  test('curry 1 | with explicit types', () => {
    const result = mergeWith<Output>(concat, A)(B)
    result // $ExpectType Output
  })
  test('curry 2 | without explicit types', () => {
    const result = mergeWith(concat)(A, B)
    result // $ExpectType Obj
  })
  test('curry 2 | with explicit types', () => {
    const result = mergeWith<Output>(concat)(A, B)
    result // $ExpectType Output
  })
})
