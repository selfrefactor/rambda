import {assoc, view, lens, prop, lensPath, lensIndex,lensProp } from 'rambda'
var alice = {
  name: 'Alice Jones',
  address: ['22 Walnut St', 'San Francisco', 'CA'],
  pets: {dog: 'joker', cat: 'batman'}
};

var nameLens = lens(prop('name'), assoc('name'));
var addressLens = lensProp('address');
var headLens = lensIndex(0);
var dogLens = lensPath(['pets', 'dog']);

describe('add', () => {
  it('number', () => {
    const result = view(dogLens, alice)
    result // $ExpectType number
  });
});
