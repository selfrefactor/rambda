import { zipObj } from 'rambda'

describe('zipObj', () => {
  it('happy', () => {
    const result = zipObj([ 'a', 'b', 'c', 'd', 'e', 'f' ], [ 1, 2, 3 ])
    result // $ExpectType { [index: string]: number; }
  });
});
