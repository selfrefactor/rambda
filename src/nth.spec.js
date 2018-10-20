import { nth } from './nth'

test('', () => {
    expect(
      nth(2, [1,2,3,4])
    ).toEqual(3)
})

test('with curry', () => {
    expect(
      nth(2)([1,2,3,4])
    ).toEqual(3)
})