import { readFileSync } from 'fs'
import { resolve } from 'path'
const contentPath = resolve(__dirname, '../../../rambda/files/README.md')

export const CONTENT = readFileSync(contentPath).toString()
