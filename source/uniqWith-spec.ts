import { uniqWith } from 'rambda'

describe('uniqWith', () => {
  it('happy', () => {
    const input = [
      {
        id    : 0,
        title : 'foo',
      },
      {
        id    : 1,
        title : 'bar',
      },
      {
        id    : 2,
        title : 'baz',
      },
      {
        id    : 3,
        title : 'foo',
      },
      {
        id    : 4,
        title : 'bar',
      },
    ]
  
  
    const fn = (x:any, y:any) => x.title === y.title
  
    const result = uniqWith(fn, input)
    result // $ExpectType { id: number; title: string; }[]
  });
});
