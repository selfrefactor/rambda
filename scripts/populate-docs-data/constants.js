import { readFileSync } from 'fs'
import { resolve } from 'path'
const typingsPath = resolve(__dirname, '../../../rambda/files/index.d.ts')

export const BOTH_LIBRARIES = readFileSync(typingsPath).toString()
const [ rambda ] = BOTH_LIBRARIES.split('// RAMBDAX_MARKER_START')
export const ORIGIN = rambda

export const getOrigin = (withRambdax = false) =>
  withRambdax ? BOTH_LIBRARIES : ORIGIN
export const wayTooLongTypings = [ 'pipe', 'compose' ]
