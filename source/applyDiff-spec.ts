import {applyDiff} from 'rambda'

interface Output {
  a: {
    b: number,
    d: number,
  },
}

describe('R.applyDiff', () => {
  it('happy', async() => {
    const obj = {a: {b: 1, c: 2}}
    const rules = [
      {op: 'remove', path: 'a.c'} as const,
      {op: 'add', path: 'a.d', value: 4} as const,
      {op: 'update', path: 'a.b', value: 2} as const,
    ]
    const result = applyDiff<Output>(rules, obj)
    result // $ExpectType Output
  })
})
