import { readFileSync } from 'fs'
import { resolve } from 'path'
const typingsPath = resolve(__dirname, '../../../rambda/files/index.d.ts')

export const ORIGIN = readFileSync(typingsPath).toString()
export const wayTooLongTypings = [ 'pipe', 'compose' ]
