import { test } from './test'

test('test', () => {
    expect(test(/^x/, 'xyz')).toBeTruthy()

    expect(test(/^y/)('xyz')).toBeFalsy()
})
