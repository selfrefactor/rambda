import { any } from 'rambda'

describe('any', () => {
  it('1', () => {
    const x = any<number>((y,i)=> { // $ExpectType boolean
      y // $ExpectType number
      i // $ExpectType number
      return y > 2
    },[1,2,3]); 
  });
  it('2', () => {
    const x = any<number>((y)=> { // $ExpectType boolean
      y // $ExpectType number
      return y > 2
    },[1,2,3]); 
  });

  it('1 curry', () => {
    const x = any<number>((y,i)=> { // $ExpectType boolean
      y // $ExpectType number
      i // $ExpectType number
      return y > 2
    })([1,2,3]); 
  });
  it('2 curry', () => {
    const x = any<number>((y)=> { // $ExpectType boolean
      y // $ExpectType number
      return y > 2
    })([1,2,3]); 
  });
});
