import { ms } from 'string-fn'

import { importRamdaSpecs } from './import-ramda-specs.js'
import { runRamdaSpecs } from './run-ramda-specs.js'
import { writeSummary } from './src/write-summary.js'

jest.setTimeout(ms('12 minutes'))


// The test are running agains the bundle file, build before this
// ============================================
test('happy', async () => {
  const methodsWithSpecs = await importRamdaSpecs()
  // await runRamdaSpecs(methodsWithSpecs)
  await writeSummary()
  // console.log('done')
})
