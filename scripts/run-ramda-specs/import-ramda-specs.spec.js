import { ms } from 'string-fn'
jest.setTimeout(ms('4 minutes'))

import { importRamdaSpecs } from './import-ramda-specs'

test('happy', async () => {
  await importRamdaSpecs()
})
