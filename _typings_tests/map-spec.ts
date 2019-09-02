import { map } from 'rambda'

describe('map with objects', () => {
  it('1', () => {
    const x = map<number, string>((a,b,c) => { // $ExpectType Dictionary<string>
      a // $ExpectType number
      b // $ExpectType string
      c // $ExpectType Dictionary<number>
      return `${a}`
    },{a:1,b:2}); 
  });
  it('2', () => {
    const x = map<number, string>((a,b) => { // $ExpectType Dictionary<string>
      a // $ExpectType number
      b // $ExpectType string
      return `${a}`
    },{a:1,b:2}); 
  });
  it('3', () => {
    const x = map<number, string>((a) => { // $ExpectType Dictionary<string>
      a // $ExpectType number
      return `${a}`
    },{a:1,b:2}); 
  });
});
