import { runSpecs } from './src/run-specs'

export async function runRamdaSpecs(methodsWithSpecs){
  await runSpecs(methodsWithSpecs)
}
