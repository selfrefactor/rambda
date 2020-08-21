import {lensPath, view} from 'rambda'

interface Input {
  foo: string
  bar: number[]
  baz: {
    a: string
    b: string
  }
}

const testObject: Input = {
  foo : 'Led Zeppelin',
  bar : [ 1, 2 ],
  baz : {
    a : 'x',
    b : 'y',
  },
}

const path = lensPath(['baz', 'a'])
const pathAsString = lensPath('baz.a')

describe('R.lensPath', () => {
  it('happy', () => {
    const result = view<Input, string>(path, testObject)
    result // $ExpectType string
  })
  it('using string as path input', () => {
    const result = view<Input, string>(pathAsString, testObject)
    result // $ExpectType string
  })
})
