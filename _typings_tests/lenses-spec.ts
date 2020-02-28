import {
  lens,
  // lensIndex,
  lensPath,
  // lensProp,
  view,
} from 'rambda'

// Rambda typings are not great for this method
import {assoc } from 'ramda'

interface Dictionary<T> {
  [index: string]: T;
}
interface Input{
  name: string
  address: string[],
  pets: Dictionary<string>,
}

const alice: Input = {
  name: 'Alice Jones',
  address: ['22 Walnut St', 'San Francisco', 'CA'],
  pets: {dog: 'joker', cat: 'batman'}
};

var nameLens = lens<Input, string, string>((x: Input) =>{
  return x.name
}, assoc('name'));
// var addressLens = lensProp('address');
// var headLens = lensIndex(0);
var dogLens = lensPath(['pets', 'dog']);

describe('lenses', () => {
  it('view 1', () => {
    const result = view<Input, string>(dogLens, alice) // $ExpectType string
    console.log(result)
  });
  it('view 2', () => {
    const result = view<Input, string>(nameLens, alice) // $ExpectType string
    console.log(result)
  });
});
