import { without } from 'rambda'

describe('without', () => {
  it('happy', () => {
    const itemsToOmit = [ 'A', 'B', 'C' ]
  const collection = [ 'A', 'B', 'C', 'D', 'E', 'F' ]
  const result = without(itemsToOmit, collection)  
    result // $ExpectType string[]
  });
});
