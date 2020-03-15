import { readFileSync } from 'fs'
import { resolve } from 'path'

import { getTypings } from './_modules/getTypings'
import { parse } from './_modules/parse'

void (function populateDocsData(){
  const sourcePath = resolve(__dirname, '../../rambda/files/README.md')

  const typingsData = getTypings()
  const source = readFileSync(sourcePath).toString()
})()
