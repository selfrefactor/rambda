import { filter } from 'rambda'

describe('filter', () => {
  it('object', () => {
    const x = filter<number>((a,b,c)=> { // $ExpectType Dictionary<number>
      b // $ExpectType string
      c // $ExpectType Dictionary<number>

      // needed as at one point there was this error:
      /*
        ERROR: 7:7  expect  Expected type to be:
        Dictionary<number> 
          got:
        Dictionary<number>

      */
      // ============================================
      const d = Object.keys(c) // $ExpectType string[]
      return a > 1
    },{a:1,b:2}); 
  });
});
