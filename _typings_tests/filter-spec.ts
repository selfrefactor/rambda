import { filter } from 'rambda'

describe('filter', () => {
  it('curry', () => {
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
    })({a:1,b:2}); 
  });

  it('object with three arguments predicate', () => {
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

  it('object with two arguments predicate', () => {
    const x = filter<number>((a,b)=> { // $ExpectType Dictionary<number>
      b // $ExpectType string
      return a > 1
    },{a:1,b:2}); 
  });
  it('object with one argument predicate', () => {
    const x = filter<number>((a)=> { // $ExpectType Dictionary<number>
      a // $ExpectType number
      return a > 1
    },{a:1,b:2}); 
  });
});
