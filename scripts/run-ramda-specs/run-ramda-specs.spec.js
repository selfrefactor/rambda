import { ms } from 'string-fn'

import { runRamdaSpecs } from './run-ramda-specs.js'

jest.setTimeout(ms('12 minutes'))

// The test are running agains the bundle file, build before this
// ============================================
test('happy', async () => {
  const withInitialStep = true
  await runRamdaSpecs({ withInitialStep })
})
