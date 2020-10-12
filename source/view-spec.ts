import {lens, view, assoc} from 'rambda'

interface Input {
  foo: string,
}

const testObject: Input = {
  foo: 'Led Zeppelin',
}

const fooLens = lens<Input, string, string>((x: Input) => {
  return x.foo
}, assoc('foo'))

describe('R.view', () => {
  it('happt', () => {
    const result = view<Input, string>(fooLens, testObject)
    result // $ExpectType string
  })
})
