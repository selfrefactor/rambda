import { combineAll } from './combine-all.js'

test('happy', () => {
  expect(combineAll()).toMatchSnapshot()
})
