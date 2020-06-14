import { build } from '../utils'
import { resolve } from 'path'
import { ms } from 'string-fn'

import { runRamdaSpecs } from './run-ramda-specs'
import { runSingleSpec } from './src/run-specs'

jest.setTimeout(ms('12 minutes'))

test.skip('run all specs', async () => {
  await build()
  const withInitialStep = false
  await runRamdaSpecs({ withInitialStep })
})

test('run single spec', async () => {
  await build()
  const skipDelete = true
  await runSingleSpec('where', skipDelete)
}) 
