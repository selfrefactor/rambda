import { both } from 'rambda'

describe('both', () => { 
  it('with passed type', () => {
    const fn = both<number>( // $ExpectType Predicate<number>
      x => {
        return x > 1
      },
      x => {
        return x % 2 === 0
      },
    );
    const result = fn(2) // $ExpectType boolean
    result // $ExpectType boolean
  });
  it('no type passed', () => {
    const fn = both(
      x => {
        x // $ExpectType any
        return x > 1
      },
      x => {
        return x % 2 === 0
      },
    );
    const result = fn(2) // $ExpectType boolean
    result // $ExpectType boolean
  });
});

describe('both + curry', () => {
  it('with passed type', () => {
    const fn = both<number>( // $ExpectType Predicate<number>
      x => {
        return x > 1
      })(
      x => {
        return x % 2 === 0
      },
    );
    const result = fn(2) // $ExpectType boolean
    result // $ExpectType boolean
  });
  it('no type passed', () => {
    const fn = both(
      x => {
        x // $ExpectType unknown
        return x as number > 1
      })(
      x => {
        return x as number % 2 === 0
      },
    );
    const result = fn(2) // $ExpectType boolean
    result // $ExpectType boolean
  });
});
