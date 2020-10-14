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

  await build()
  await importRamdaSpecs(WITH_INITIAL_STEP)
  expect(await runSingleSpec('dropWhile')).toBeTrue()
})

test('run all specs', async () => {
  if (!RUN_ALL) return
  await build()
  const withInitialStep = false
  await runRamdaSpecs({ withInitialStep })
})
