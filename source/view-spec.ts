import {lens, view, assoc} from 'rambda'

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

const nameLens = lens<Input, string, string>((x: Input) => {
  return x.name
}, assoc('name'))

describe('R.view', () => {
  it('happt', () => {
    const result = view<Input, string>(nameLens, MockObject)
    result // $ExpectType string
  })
})
