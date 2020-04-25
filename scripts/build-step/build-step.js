import { createExportedTypings } from './create-exported-typings'

export async function buildStep(withRambdax = false){
  await createExportedTypings(withRambdax)
}
