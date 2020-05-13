import { importRamdaSpecs } from './import-ramda-specs.js'
import { runSpecs } from './src/run-specs'
import { writeSummary } from './src/write-summary.js'

const singleMethod = 'when'
// const singleMethod = undefined

export async function runRamdaSpecs({ withInitialStep }){
  const methodsWithSpecs = await importRamdaSpecs(withInitialStep)

  await runSpecs(methodsWithSpecs, singleMethod)
  await writeSummary()
}
