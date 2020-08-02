import { ms } from 'string-fn'
jest.setTimeout(ms('4 minutes'))

import { importRamdaSpecs } from './import-ramda-specs'

const WITH_INITIAL_STEP = false

test('happy', async () => {
  await importRamdaSpecs(WITH_INITIAL_STEP)
})
