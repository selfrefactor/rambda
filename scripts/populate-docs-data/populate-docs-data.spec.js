import { populateDocsData } from './populate-docs-data.js'

test('happy', async () => {
  const withRambdax = false
  await populateDocsData({ withRambdax })
  // await expect(populateDocsData()).resolves.toBeObject()
})
