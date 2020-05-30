import { createExportedTypings } from './create-exported-typings'

test('happy', async () => {
  expect(await createExportedTypings()).toMatchSnapshot()
})
