import {modifyPath} from 'rambda'

const obj = {a: {b: {c: 1}}}

describe('R.modifyPath', () => {
  it('happy', () => {
    const result = modifyPath(['a', 'b', 'c'], (x: number) => String(x), obj)
    result // $ExpectType Record<string, unknown>
		result.a.b.c // $ExpectType string
  })
  it('explicit return type', () => {
    interface Foo extends Record<string, unknown> {
      a: 1,
    }
    const result = modifyPath<Foo>('a.b.c', (x: number) => x + 1, obj)
    result // $ExpectType Foo
  })
})
