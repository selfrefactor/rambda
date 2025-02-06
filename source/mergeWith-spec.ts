import { type MergeInsertions, concat, mergeWith, piped } from 'rambda'

const A = {
  a: true,
  values: [10, 20],
}
const B = {
  b: true,
  values: [15, 35],
}

type Output = MergeInsertions<typeof A & typeof B>

describe('R.mergeWith', () => {
  test('no curry', () => {
    const result = mergeWith<Output>(concat, A, B)
    result // $ExpectType { a: boolean; values: number[]; b: boolean; }
  })
  test('inside piped', () => {
    const result = piped(A, mergeWith<Output>(concat, B))
    result // $ExpectType { a: boolean; values: number[]; b: boolean; }
  })
})
