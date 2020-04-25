import { populateDocsData } from '../populate-docs-data/populate-docs-data'
import { populateReadmeData } from './populate-readme-data.js'

// test('generate final readme file', async () => {
//   await populateDocsData({withRambdax: false})
//   await populateReadmeData({withRambdax: false})
// })

test('for Ramdax', async () => {
  await populateDocsData({ withRambdax : true })
  await populateReadmeData({ withRambdax : true })
})
