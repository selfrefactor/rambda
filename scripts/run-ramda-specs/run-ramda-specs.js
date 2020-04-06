import { take } from 'rambdax'

import { runSpecs } from './src/run-specs'

export async function runRamdaSpecs(methodsWithSpecs){
  await runSpecs(take(1, methodsWithSpecs))
}
