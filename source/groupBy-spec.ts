import { groupBy, pipe } from 'rambda'

describe('R.groupBy', () => {
  it('happy', () => {
    const groupByFn = (x: string) => String(x.length)
    const list = ['foo', 'bar']

    const result = pipe(list, groupBy(groupByFn))
    result // $ExpectType Partial<Record<string, string[]>>
  })
})
