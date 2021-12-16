import {keys} from './keys'

test('happy', () => {
  expect(keys({a: 1})).toEqual(['a'])
})
