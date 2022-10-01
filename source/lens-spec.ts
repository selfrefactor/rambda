import {lens, assoc} from 'rambda'

interface Input {
  foo: string,
}

describe('R.lens', () => {
  it('happy', () => {
    const fn = lens<Input, string, string>((x: Input) => {
      x.foo // $ExpectType string
      return x.foo
    }, assoc('name'))
    fn // $ExpectType Lens
  })
})
