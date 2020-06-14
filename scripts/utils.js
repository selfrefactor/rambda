import { readFileSync } from 'fs'
import { readJson } from 'fs-extra'
import { spawn } from 'helpers-fn'
import { resolve } from 'path'

export async function getRambdaData(){
  const rambdaData = await readJson(`${ __dirname }/populate-docs-data/data.json`)

  return rambdaData
}

export async function getRambdaxData(){
  const rambdaData = await readJson(`${ __dirname }/populate-docs-data/data-rambdax.json`)

  return rambdaData
}

export async function getRambdaMethods(){
  const rambdaData = await getRambdaData()

  return Object.keys(rambdaData)
}

export async function getRambdaxMethods(){
  const rambdaxData = await getRambdaxData()

  return Object.keys(rambdaxData)
}

const typingsPath = resolve(__dirname, '../files/index.d.ts')

export const BOTH_LIBRARIES = readFileSync(typingsPath).toString()
export const [ intro ] = BOTH_LIBRARIES.split('// API_MARKER')

const [ rambda ] = BOTH_LIBRARIES.split('// RAMBDAX_MARKER_START')
export const ORIGIN = rambda

export const getOrigin = (withRambdax = false) =>
  withRambdax ? BOTH_LIBRARIES : ORIGIN
export const wayTooLongTypings = [ 'pipe', 'compose' ]
