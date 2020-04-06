import { importRamdaSpecs } from './import-ramda-specs.js'

test('happy', async () => {
  await importRamdaSpecs({ skipDepInstall : false })
})
