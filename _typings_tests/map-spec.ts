import { map } from 'rambda'

describe.skip('map with objects', () => {
  it('', () => {
    const x = map<number, string>((a,b,c) => {
      a // $ExpectType number[]
      b // $ExpectType number
      c // $ExpectType Dictionary<number>
      return `${a}`
    },{a:1,b:2}); // $ExpectType string
  });
});
