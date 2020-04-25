import {lens, lensIndex, lensPath, lensProp, view} from 'rambda'

// Rambda typings are not great for this method
import {assoc} from 'ramda'

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
const addressLens = lensProp('address')
const headLens = lensIndex(0)
const dogLens = lensPath(['pets', 'dog'])

describe('lenses', () => {
  it('lens', () => {
    const result = view<Input, string>(nameLens, MockObject) 
    result // $ExpectType string
  })
  it('lens path', () => {
    const result = view<Input, string>(dogLens, MockObject)
    result // $ExpectType string
  })
  it('lens prop', () => {
    const result = view<Input, string>(addressLens, MockObject) 
    result // $ExpectType string
  })
  it('lens index', () => {
    const result = view<Input['address'], string>(
      headLens,
      MockObject.address
    )  
    result // $ExpectType string
  })
})
