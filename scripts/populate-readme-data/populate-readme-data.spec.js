import { populateDocsData } from '../populate-docs-data/populate-docs-data'
import { populateReadmeData } from './populate-readme-data.js'

test('generate final readme file', async () => {
  await populateDocsData()
  await populateReadmeData()
})
