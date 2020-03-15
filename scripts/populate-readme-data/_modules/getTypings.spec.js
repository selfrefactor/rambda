import { getTypings } from './getTypings'

test('happy', () => {
  expect(getTypings()).toMatchSnapshot()
})
