import {groupWith} from 'rambda'

describe('R.groupWith', () => {
  it('happy', () => {
    const groupWithFn = (x: string, y: string) => x.length === y.length
    const list = ['foo', 'bar', 'bazzz']

    const result = groupWith(groupWithFn, list)
    const curriedResult = groupWith(groupWithFn)(list)
    result // $ExpectType readonly (readonly string[])[]
    curriedResult // $ExpectType readonly (readonly string[])[]
  })
})
