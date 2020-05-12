import { extractExample } from './extract-example.js'

test('happy', () => {
  expect(extractExample()).toMatchSnapshot()
})
