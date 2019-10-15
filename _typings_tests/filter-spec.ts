import { filter } from 'rambda'

describe('filter with array', () => {
  it('1 curry', () => {
    const x = filter<number>((a)=> { // $ExpectType number[]
      a // $ExpectType number
      return a > 1
    })([1,2,3]);
    x // $ExpectType number[]
  });
  it('1', () => {
    const x = filter<number>((a)=> { // $ExpectType number[]
      a // $ExpectType number
      return a > 1
    },[1,2,3]);
    x // $ExpectType number[]
  });
  it('2', () => {
    const x = filter<number>((a, b)=> { // $ExpectType number[]
      a // $ExpectType number
      return a > 1
    },[1,2,3]);
    x // $ExpectType number[]
  });
})

describe('filter with objects', () => {
  it('curry', () => {
    const x = filter<number, number>((a,b,c)=> { // $ExpectType Dictionary<number>
      b // $ExpectType string
      c // $ExpectType Dictionary<number>

      return a > 1
    })({a:1,b:2});
    x // $ExpectType Dictionary<number>
  });

  it('object with three arguments predicate', () => {
    const x = filter<number>((a,b,c)=> { // $ExpectType Dictionary<number>
      b // $ExpectType string
      c // $ExpectType Dictionary<number>

      return a > 1
    },{a:1,b:2});
    x // $ExpectType Dictionary<number>
  });

  it('object with two arguments predicate', () => {
    const x = filter<number>((a,b)=> { // $ExpectType Dictionary<number>
      b // $ExpectType string
      return a > 1
    },{a:1,b:2});
    x // $ExpectType Dictionary<number>
  });
  it('object with one argument predicate', () => {
    const x = filter<number>((a)=> { // $ExpectType Dictionary<number>
      a // $ExpectType number
      return a > 1
    },{a:1,b:2});
    x // $ExpectType Dictionary<number>
  });
});
