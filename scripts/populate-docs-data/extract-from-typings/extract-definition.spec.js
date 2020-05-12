import { extractDefinition } from './extract-definition.js'

test('happy', () => {
  expect(extractDefinition()).toMatchSnapshot()
})
