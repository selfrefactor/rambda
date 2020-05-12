import { outputFile } from 'fs-extra'
import { resolve } from 'path'
import { map, template } from 'rambdax'

import methodsDataRambdax from '../populate-docs-data/data-rambdax.json'
import methodsDataRambda from '../populate-docs-data/data.json'
import { createMethodData } from './create-method-data'
import { getIntro } from './get-intro'
import { getTail } from './get-tail'
import { rambdaRepl } from './rambda-repl'

const readmeTemplate = `
{{intro}}
`
const readmeTemplatex = `
{{intro}}

## API

{{methods}}

{{tail}}
`

function getOutputPath(withRambdax){
  if (withRambdax){
    const dir = resolve(__dirname, '../../../rambdax')

    return `${ dir }/README_IN_PROGRESS.md`
  }
  const dir = resolve(__dirname, '../../')

  return `${ __dirname }/README.md`
  // return `${ dir }/README.md`
}

export async function populateReadmeData({ withRambdax }){
  const methodsData = withRambdax ? methodsDataRambdax : methodsDataRambda

  const methods = map(x => {
    if (!x.example) return x
    const replLink = rambdaRepl(x.example)

    return {
      ...x,
      replLink,
    }
  })(methodsData)

  const sortedMethods = Object.keys(methods)
    .map(key => ({
      ...methods[ key ],
      methodName : key,
    }))
    .sort((x, y) =>
      x.methodName.toLowerCase() > y.methodName.toLowerCase() ? 1 : -1)
    .map(createMethodData)

  const intro = await getIntro(withRambdax)
  const tail = await getTail(withRambdax)
  const templateData = {
    intro,
    tail,
    methods : sortedMethods.join('\n\n'),
  }

  const readme = template(readmeTemplate, templateData).trim()
  const output = getOutputPath(withRambdax)

  await outputFile(output, readme)

  return readme
}
