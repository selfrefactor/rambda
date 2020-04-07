import { populateDocsData } from './populate-docs-data.js'

test('happy', () => {
  expect(
    populateDocsData()
  ).toMatchSnapshot()
})