import { extractExplanation } from './extract-explanation.js'

test('happy', () => {
  expect(extractExplanation()).toMatchSnapshot()
})
