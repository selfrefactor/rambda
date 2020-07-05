import {groupBy} from 'rambda'

describe('R.groupBy', () => {
  it('happy', () => {
    const groupByFn = (x: string) => String(x.length)
    const list = ['foo', 'barr', 'bazzz']

    const result = groupBy(groupByFn, list)
    const curriedResult = groupBy(groupByFn)(list)
    result // $ExpectType { [index: string]: string[]; }
    curriedResult // $ExpectType { [index: string]: string[]; }
  })
})
