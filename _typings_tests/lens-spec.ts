import {
  // assoc,
  // lens,
  // lensIndex,
  lensPath,
  // lensProp,
  // prop,
  view,
} from 'rambda'

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

// var nameLens = lens(prop('name'), assoc('name'));
// var addressLens = lensProp('address');
// var headLens = lensIndex(0);
var dogLens = lensPath(['pets', 'dog']);

describe('add', () => {
  it('number', () => {
    const result = view<Input, string>(dogLens, alice)
    result // $ExpectType string  
  });
});
