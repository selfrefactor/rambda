import { populateDocsData } from './populate-docs-data'

test('happy', async () => {
  const withRambdax = false
  await populateDocsData({ withRambdax })
  // await expect(populateDocsData()).resolves.toBeObject()
})
