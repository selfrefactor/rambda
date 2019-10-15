import { omit } from 'rambda'

describe('omit with string as props input', () => {
  it('one type', () => {
    const x = omit<number>('a,c', {a:1,b:2,c:3,d:4}); // $ExpectType Dictionary<number>
    x // $ExpectType Dictionary<number>
    const y = omit<number>('a,c')({a:1,b:2,c:3,d:4}); // $ExpectType Dictionary<number>
    y // $ExpectType Dictionary<number>
  });
  it('two types', () => {
    interface Output{
      b: string
      d: number
    }

    const x = omit<string|number, Output>('a,c', {a:1,b:'2',c:3,d:4}); // $ExpectType Output
    x.b // $ExpectType string
    const y = omit<string|number, Output>('a,c')({a:1,b:'2',c:3,d:4}); // $ExpectType Output
    y.d // $ExpectType number
  });

  it('infered input type', () => {
    const x = omit('a,c', {a:1,b:2,c:3,d:4}); // $ExpectType Dictionary<number>
    x // $ExpectType Dictionary<number>
    const y = omit('a,c', {a:1,b:'1',c:3,d:4}); // $ExpectType Dictionary<string | number>
    y // $ExpectType Dictionary<string | number>
    const q = omit('a,c')({a:1,b:1,c:3,d:4}); // $ExpectType Dictionary<unknown>
    q // $ExpectType Dictionary<unknown>
  });
});

describe('omit with array as props input', () => {
  it('one type', () => {
    const x = omit<number>(['a,c'], {a:1,b:2,c:3,d:4}); // $ExpectType Dictionary<number>
    x // $ExpectType Dictionary<number>
    const y = omit<number>(['a,c'])({a:1,b:2,c:3,d:4}); // $ExpectType Dictionary<number>
    y // $ExpectType Dictionary<number>
  });
});
