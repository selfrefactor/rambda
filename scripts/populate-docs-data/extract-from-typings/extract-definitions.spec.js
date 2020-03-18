import { extractDefinitions } from './extract-definitions.js'

test('happy', () => {
  expect(
    extractDefinitions()
  ).toMatchSnapshot()
})