import {lensProp, view} from 'rambda'

interface Input {
  foo: string,
}

const testObject: Input = {
  foo: 'Led Zeppelin',
}

const lens = lensProp('foo')

describe('R.lensProp', () => {
  it('happy', () => {
    const result = view<Input, string>(lens, testObject)
    result // $ExpectType string
  })
})
