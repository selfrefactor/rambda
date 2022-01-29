import { concat } from './concat';
import { mergeWith } from './mergeWith'

test('happy', () => {
  const result = mergeWith(concat,
    { a: true, values: [10, 20] },
    { b: true, values: [15, 35] });
    const expected = { a: true, values: [ 10, 20, 15, 35 ], b: true }
    expect(result).toEqual(expected)
})
