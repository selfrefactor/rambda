import { uniq } from 'rambda'

describe('uniq', () => {
  it('happy', () => {

    const result = uniq([ 1, 2, 3, 3, 3, 1, 2, 0 ])
    result // $ExpectType number[]
  });
});
