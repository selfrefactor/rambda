import { populateDocsData } from '../populate-docs-data/populate-docs-data'
import { populateReadmeData } from './populate-readme-data'

test('generate final readme file for one of both libraries', async () => {
  const withRambdax = false
  await populateDocsData({ withRambdax })
  await populateReadmeData({ withRambdax })
})
