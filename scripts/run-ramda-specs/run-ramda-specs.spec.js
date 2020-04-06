import { ms } from 'string-fn'

import { importRamdaSpecs } from './import-ramda-specs.js'
import { runRamdaSpecs } from './run-ramda-specs.js'

jest.setTimeout(ms('4 minutes'))

test('happy', async () => {
  const methodsWithSpecs = await importRamdaSpecs()
  // await runRamdaSpecs(methodsWithSpecs)
  console.log('done')
})
