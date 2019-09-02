import { pick } from 'rambda'

describe('pick with string as input', () => {
  it('one type', () => {
    const x = pick<number>('a,c', {a:1,b:2,c:3,d:4}); // $ExpectType Dictionary<number>
    const y = pick<number>('a,c')({a:1,b:2,c:3,d:4}); // $ExpectType Dictionary<number>
  });
  it('two types', () => {
    const x = pick<string|number, number>('a,c', {a:1,b:'2',c:3,d:4}); // $ExpectType Dictionary<number>
    const y = pick<string|number, number>('a,c')({a:1,b:'2',c:3,d:4}); // $ExpectType Dictionary<number>
  });
  it('infered input type', () => {
    const x = pick('a,c', {a:1,b:2,c:3,d:4}); // $ExpectType Dictionary<number>
    const y = pick('a,c', {a:1,b:'1',c:3,d:4}); // $ExpectType Dictionary<string | number>
    const q = pick('a,c')({a:1,b:1,c:3,d:4}); // $ExpectType Dictionary<unknown>
  });
});
