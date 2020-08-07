import { outputFile, readJson } from 'fs-extra'
import { resolve } from 'path'
import { interpolate, map, replace } from 'rambdax'

import { buildStep } from '../build-step/build-step'
import { createMethodData } from './create-method-data'
import { getIntro } from './get-intro'
import { getTail } from './get-tail'
import { rambdaRepl } from './rambda-repl'

async function getMethodsData(withRambdax){
  const dataFile = withRambdax ? 'data-rambdax.json' : 'data.json'

  return readJson(resolve(__dirname, `../populate-docs-data/${ dataFile }`))
}

const removeDoubleNewLines = replace(/\n{3,5}/g, '\n\n')

const readmeTemplate = `
{{intro}}

## API

{{methods}}

{{tail}}
`

function getOutputPath(withRambdax){
  if (withRambdax){
    const dir = resolve(__dirname, '../../../rambdax')

    return `${ dir }/README.md`
  }
  const dir = resolve(__dirname, '../../')

  return `${ dir }/README.md`
}

export async function populateReadmeData({ withRambdax }){
  await buildStep({ withRambdax })

  const methodsData = await getMethodsData(withRambdax)

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
    .map(method => createMethodData(method, withRambdax))

  const intro = await getIntro(withRambdax)
  const tail = await getTail(withRambdax)
  const templateData = {
    intro,
    tail,
    methods : sortedMethods.join('\n\n'),
  }

  const readme = interpolate(readmeTemplate, templateData).trim()
  const output = getOutputPath(withRambdax)

  const finalReadme = removeDoubleNewLines(readme)
  await outputFile(output, finalReadme)

  return finalReadme
}
