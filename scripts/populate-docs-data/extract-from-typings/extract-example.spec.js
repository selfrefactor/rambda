import { extractExample } from './extract-example'

test('happy', () => {
  expect(extractExample()).toMatchSnapshot()
})
