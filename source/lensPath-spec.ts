import {lensPath, view} from 'rambda'

interface Input {
  foo: number[],
  bar: {
    a: string,
    b: string,
  },
}

const testObject: Input = {
  foo: [1, 2],
  bar: {
    a: 'x',
    b: 'y',
  },
}

const path = lensPath(['bar', 'a'])
const pathAsString = lensPath('bar.a')

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
