import { importRamdaSpecs } from './import-ramda-specs'
import { runSpecs } from './src/run-specs'
import { writeSummary } from './src/write-summary'

export async function runRamdaSpecs({ withInitialStep }){
  const methodsWithSpecs = await importRamdaSpecs(withInitialStep)

  await runSpecs(methodsWithSpecs)
  await writeSummary()
}
