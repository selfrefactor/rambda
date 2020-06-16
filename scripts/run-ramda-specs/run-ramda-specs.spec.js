import { resolve } from 'path'
import { ms } from 'string-fn'

import { build } from '../utils'
import { runRamdaSpecs } from './run-ramda-specs'
import { runSingleSpec } from './src/run-specs'

jest.setTimeout(ms('12 minutes'))
const RUN_ALL = false

test('run all specs', async () => {
  if (!RUN_ALL) return
  await build()
  const withInitialStep = false
  await runRamdaSpecs({ withInitialStep })
})
 
test('run single spec', async () => {
  if (RUN_ALL) return
  await build()
  const skipDelete = true
  await runSingleSpec('mergeAll', skipDelete)
})
