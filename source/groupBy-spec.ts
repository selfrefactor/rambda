import {groupBy} from 'rambda'

describe('R.groupBy', () => {
  it('happy', () => {
    const groupByFn = (x: string) => String(x.length)
    const list = ['foo', 'barr', 'bazzz']

    const result = groupBy(groupByFn, list)
    result // $ExpectType { [index: string]: string[]; }

    const curriedResult = groupBy(groupByFn)(list)
    curriedResult // $ExpectType { [index: string]: string[]; }
  })
})
