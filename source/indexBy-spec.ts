import {indexBy} from 'rambda'

const list = [{a: {b: '1'}}, {a: {c: '2'}}, {a: {b: '3'}}]

describe('indexBy', () => {
  it('happy', () => {
    const result = indexBy(x => x.a.b, list)
    const resultCurried = indexBy<any>(x => x.a.b)(list)
    result.foo?.a.b // $ExpectType string | undefined
    resultCurried // $ExpectType { [x: string]: any; }
  })

  it('with string', () => {
    const result = indexBy('a.b', list)
    const resultCurried = indexBy<any>('a.b')(list)
    result.foo?.a.b // $ExpectType string | undefined
    resultCurried // $ExpectType { [key: string]: any; }
  })

  it('with interface', () => {
    interface Foo {
      a: string,
    }
    const interfaceList = [{a: 'foo'}, {a: 'bar'}]
    const result = indexBy<Foo>(x => {
      x.a // $ExpectType string
      return x.a
    }, interfaceList)
    const resultCurried = indexBy<Foo>(x => {
      x.a // $ExpectType string
      return x.a
    })(interfaceList)
    result // $ExpectType { [x: string]: Foo; }
    resultCurried // $ExpectType { [x: string]: Foo; }
  })
})
