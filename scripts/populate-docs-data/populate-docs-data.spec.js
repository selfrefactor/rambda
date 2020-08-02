import { populateDocsData } from './populate-docs-data'

test('happy', async () => {
  const withRambdax = false
  await expect(populateDocsData({ withRambdax })).resolves.toBeObject()
})
