import { ms } from 'string-fn'

import { importRamdaSpecs } from './import-ramda-specs.js'

jest.setTimeout(ms('4 minutes'))

test('happy', async () => {
  await importRamdaSpecs({ skipDepInstall : false })
})
