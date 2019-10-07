import { defaultTo } from 'rambda'

describe('defaultTo with Ramda spec', () => {
  it('happy', () => {
    const x = defaultTo<string>('foo',undefined); // $ExpectType string
  });
  it('fallback', () => {
    const x = defaultTo('foo',undefined); // $ExpectType "foo"
    const y = defaultTo('foo','bar'); // $ExpectType "foo" | "bar"
  });
  it('with one type', () => {
    const x = defaultTo<string>('foo','bar'); // $ExpectType string
  });
  it('with two types', () => {
    const x = defaultTo<string, number>('foo',1); // $ExpectType string | number
  });
});

describe('defaultTo with Rambda spec', () => {
  it('happy', () => {
    const x = defaultTo<string>('foo',undefined, 'bar'); // $ExpectType string
  });
  
  it('happy with curry', () => {
    const fn = defaultTo<string>('foo')
    const x = fn(undefined, 'bar', null); // $ExpectType string
    const y = fn(undefined); // $ExpectType string
  });

  it('with two types', () => {
    const x = defaultTo<string, number>('foo',undefined, 1, null, 2, 'bar'); // $ExpectType string | number
  });
});
 