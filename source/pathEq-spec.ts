import {pathEq} from 'rambda'

describe('path', () => {
  it('with string path', () => {
    const pathToSearch = 'a.b.c'
    const input = { a : { b : { c : 1 } } }
    const target = { c : 1 }

    const result = pathEq(pathToSearch, input, target)
    const curriedResult = pathEq(pathToSearch, input, target)
    result // $ExpectType boolean
    curriedResult // $ExpectType boolean
  })

  it('with array path', () => {
    const pathToSearch = ['a', 'b', 'c']
    const input = { a : { b : { c : 1 } } }
    const target = { c : 1 }

    const result = pathEq(pathToSearch, input, target)
    const curriedResult = pathEq(pathToSearch, input, target)
    result // $ExpectType boolean
    curriedResult // $ExpectType boolean
  })
})
