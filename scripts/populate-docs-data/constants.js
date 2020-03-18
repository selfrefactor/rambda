import { readFileSync } from 'fs'
import { resolve } from 'path'
const readmePath = resolve(__dirname, '../../../rambda/files/README.md')
const typingsPath = resolve(__dirname, '../../../rambda/files/index.d.ts')

export const README = readFileSync(readmePath).toString()
export const TYPINGS = readFileSync(typingsPath).toString()
