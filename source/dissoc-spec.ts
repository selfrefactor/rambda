import {dissoc} from 'rambda'

type Obj = {
  str: string;
  num: number;
  opt?: boolean;
  orUndefined: boolean | undefined;
  orNull: boolean | null;
};

const obj: Obj = { str: 'foo', num: 1, orUndefined: true, orNull: true };

describe('R.dissoc', () => {
  it('ramda tests', () => {
    // @ts-expect-error
    dissoc('str', obj)
    // @ts-expect-error
    dissoc('num', obj)
    // @ts-expect-error
    dissoc('orNull', obj)
   
    let result1 = dissoc('opt', obj)
    result1 // $ExpectType Obj
    // @ts-expect-error
    dissoc('num')(obj)
    let result2 = dissoc('orUndefined', obj)
    result2 // $ExpectType Obj
    let result3 = dissoc('opt')(obj)
    result3 // $ExpectType Obj
  })
})
