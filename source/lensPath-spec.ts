import {lensPath, view} from 'rambda'

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

const path = lensPath(['pets', 'dog'])
const pathAsString = lensPath('pets.doc')

describe('R.lensPath', () => {
  it('happy', () => {
    const result = view<Input, string>(path, MockObject)
    result // $ExpectType string
  })
  it('using string as path input', () => {
    const result = view<Input, string>(pathAsString, MockObject)
    result // $ExpectType string
  })
})
