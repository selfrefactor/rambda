import { populateReadmeData } from './populate-readme-data.js'

test('happy', async () => {
  expect(await populateReadmeData()).toMatchSnapshot()
})
