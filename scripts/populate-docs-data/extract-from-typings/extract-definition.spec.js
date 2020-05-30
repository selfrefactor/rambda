import { extractDefinition } from './extract-definition'

test('happy', () => {
  expect(extractDefinition()).toMatchSnapshot()
})
