import { defaultTo } from 'rambda'

describe('defaultTo', () => {
  it('happy', () => {
    const x = defaultTo<string>('foo',undefined); // $ExpectType string
  });
  it('1 type', () => {
    const x = defaultTo<string>('foo','bar'); // $ExpectType string
  });
  it('2 types', () => {
    const x = defaultTo<string, number>('foo',1); // $ExpectType string | number
  });
});
