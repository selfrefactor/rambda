import { reject } from 'rambda'

describe('reject with array', () => {
  it('1 curry', () => {
    const x = reject<number>((a)=> { // $ExpectType number[]
      a // $ExpectType number
      return a > 1
    })([1,2,3]);
    x // $ExpectType number[]
  });
  it('1', () => {
    const x = reject<number>((a)=> { // $ExpectType number[]
      a // $ExpectType number
      return a > 1
    },[1,2,3]);
    x // $ExpectType number[]
  });
  it('2', () => {
    const x = reject<number>((a, b)=> { // $ExpectType number[]
      a // $ExpectType number
      return a > 1
    },[1,2,3]);
    x // $ExpectType number[]
  });
})
 
describe('reject with objects', () => {
  it('curry', () => {
    const x = reject<number, number>((a,b,c)=> { // $ExpectType Dictionary<number>
      b // $ExpectType string
      c // $ExpectType Dictionary<number>

      return a > 1
    })({a:1,b:2});
    x // $ExpectType Dictionary<number>
  });

  it('object with three arguments predicate', () => {
    const x = reject<number>((a,b,c)=> { // $ExpectType Dictionary<number>
      b // $ExpectType string
      c // $ExpectType Dictionary<number>

      return a > 1
    },{a:1,b:2});
    x // $ExpectType Dictionary<number>
  });

  it('object with two arguments predicate', () => {
    const x = reject<number>((a,b)=> { // $ExpectType Dictionary<number>
      b // $ExpectType string
      return a > 1
    },{a:1,b:2});
    x // $ExpectType Dictionary<number>
  });
  it('object with one argument predicate', () => {
    const x = reject<number>((a)=> { // $ExpectType Dictionary<number>
      a // $ExpectType number
      return a > 1
    },{a:1,b:2});
    x // $ExpectType Dictionary<number>
  });
});
