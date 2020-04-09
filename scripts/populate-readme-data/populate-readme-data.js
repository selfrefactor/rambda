import { outputFile } from 'fs-extra'
import { map, template } from 'rambdax'

import methodsData from '../populate-docs-data/data.json'
import { createMethodData } from './create-method-data'
import { getIntro } from './get-intro'
import { rambdaRepl } from './rambda-repl'

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
  const templateData = {
    intro,
    firstPart  : PART1,
    secondPart : PART2,
    thirdPart  : PART3,
    methods    : sortedMethods.join('\n\n'),
  }
  const readme = template(readmeTemplate, templateData)
  await outputFile(`${ __dirname }/TEST_README.md`, readme)

  return readme
}
