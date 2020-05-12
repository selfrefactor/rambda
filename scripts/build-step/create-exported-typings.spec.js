import { createExportedTypings } from './create-exported-typings.js'

test('happy', async () => {
  expect(await createExportedTypings()).toMatchSnapshot()
})
