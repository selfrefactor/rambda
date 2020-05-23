import { readFileSync } from 'fs'
import { resolve } from 'path'

import rambdaData from './populate-docs-data/data.json'
const typingsPath = resolve(__dirname, '../files/index.d.ts')

export const BOTH_LIBRARIES = readFileSync(typingsPath).toString()
export const [ intro ] = BOTH_LIBRARIES.split('// API_MARKER')

const [ rambda ] = BOTH_LIBRARIES.split('// RAMBDAX_MARKER_START')
export const ORIGIN = rambda

export const getOrigin = (withRambdax = false) =>
  withRambdax ? BOTH_LIBRARIES : ORIGIN
export const wayTooLongTypings = [ 'pipe', 'compose' ]
export const rambdaMethods = Object.keys(rambdaData)
