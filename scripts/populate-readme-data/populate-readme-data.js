import { outputFile } from 'fs-extra'
import { map, template } from 'rambdax'

import methodsData from '../populate-docs-data/data.json'
import { createMethodData } from './create-method-data'
import { getIntro } from './get-intro'
import { getTail } from './get-tail'
import { rambdaRepl } from './rambda-repl'
 
const readmeTemplate = `
{{intro}}

## API

{{methods}}

{{tail}}
`

export async function populateReadmeData(){
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

  const intro = await getIntro()
  const tail = await getTail()
  const templateData = {
    intro,
    tail,
    methods : sortedMethods.join('\n\n'),
  }

  const readme = template(readmeTemplate, templateData).trim()
  await outputFile(`${ __dirname }/TEST_README.md`, readme)

  return readme
}
