import {fromPairs} from 'rambda'

describe('R.fromPairs - require explicit type for input list', () => {
  it('with string index', () => {
    const list: Array<[string, number]> = [
      [ 'a', 1 ],
      [ 'b', 2 ],
      [ 'c', 3 ],
    ]
    const result = fromPairs(list)

    result // $ExpectType { [index: string]: number; }
  })
  it('with number index', () => {
    const list: Array<[ number, string]> = [
      [ 10, 'foo' ],
      [ 20, 'bar' ],
      [ 30, 'baz' ],
    ]
    const result = fromPairs(list)

    result // $ExpectType { [index: number]: string; }
  })
})
