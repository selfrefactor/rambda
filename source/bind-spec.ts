import { bind } from 'rambda'

class Foo {}
function isFoo<T = any>(this: T): boolean {
  return this instanceof Foo;
}

describe('R.bind', () => {
  it('happy', () => {
    const foo = new Foo();
    const result = bind(isFoo, foo)()

    result // $ExpectType boolean
  })
})
