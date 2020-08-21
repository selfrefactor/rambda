import {lensProp, view} from 'rambda'

interface Dictionary<T> {
  [index: string]: T,
}
interface Input {
  name: string,
  address: string[],
  pets: Dictionary<string>,
}

const MockObject: Input = {
  name: 'Alice Jones',
  address: ['22 Walnut St', 'San Francisco', 'CA'],
  pets: {dog: 'joker', cat: 'batman'},
}

const addressLens = lensProp('address')

describe('R.lensProp', () => {
  it('happy', () => {
    const result = view<Input, string>(addressLens, MockObject)
    result // $ExpectType string
  })
})
