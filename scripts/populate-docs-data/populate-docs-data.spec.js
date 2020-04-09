import { populateDocsData } from './populate-docs-data.js'

test('happy', async () => {
  await expect(populateDocsData()).resolves.toBeObject()
})
