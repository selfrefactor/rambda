import { zip } from 'rambda'

describe('zip', () => {
  it('happy', () => {
const array1 = [ 1, 2, 3 ]
const array2 = [ 'A', 'B', 'C' ]

  const result = zip(array1)(array2)
    result // $ExpectType KeyValuePair<number, string>[]
  });
});
