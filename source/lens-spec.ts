import {lens, assoc} from 'rambda'

interface Dictionary<T> {
  [index: string]: T,
}
interface Input {
  name: string,
  address: string[],
  pets: Dictionary<string>,
}

describe('R.lens', () => {
  it('happy', () => {
    const fn = lens<Input, string, string>((x: Input) => {
      return x.name
    }, assoc('name'))
    fn // $ExpectType Lens
  })
})
