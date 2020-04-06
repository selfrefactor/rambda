import { ms } from 'string-fn'

import { importRamdaSpecs } from './import-ramda-specs.js'
import { runRamdaSpecs } from './run-ramda-specs.js'
import { writeSummary } from './src/write-summary.js'

jest.setTimeout(ms('12 minutes'))

test('happy', async () => {
  const methodsWithSpecs = await importRamdaSpecs()
  // await runRamdaSpecs(methodsWithSpecs)
  await writeSummary()
  // console.log('done')
})
