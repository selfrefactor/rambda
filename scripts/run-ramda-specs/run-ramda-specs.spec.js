import { ms } from 'string-fn'

import { runRamdaSpecs } from './run-ramda-specs'
import { runSingleSpec } from './src/run-specs'

jest.setTimeout(ms('12 minutes'))

// The test are running agains the bundle file, build before this
// ============================================
test.skip('run all specs', async () => {
  const withInitialStep = false
  await runRamdaSpecs({ withInitialStep })
})

test('run single spec', async () => {
  const skipDelete = true
  await runSingleSpec('groupWith', skipDelete)
})
