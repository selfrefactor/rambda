import { ms } from 'string-fn'

import { build } from '../utils'
import { importRamdaSpecs } from './import-ramda-specs'
import { runRamdaSpecs } from './run-ramda-specs'
import { runSingleSpec } from './src/run-specs'

jest.setTimeout(ms('12 minutes'))
const RUN_ALL = false

test('run single spec', async () => {
  if (RUN_ALL) return
  const WITH_INITIAL_STEP = false
  const SKIP_DELETE = true

  await build()
  await importRamdaSpecs(WITH_INITIAL_STEP)
  await runSingleSpec('move', SKIP_DELETE)
})

test('run all specs', async () => {
  if (!RUN_ALL) return
  await build()
  const withInitialStep = false
  await runRamdaSpecs({ withInitialStep })
})
