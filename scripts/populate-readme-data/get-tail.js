import { readFile } from 'fs-extra'
import { template } from 'rambdax'

const templateTail = `
## CHANGELOG

{{changelog}}

{{additionalInfo}}
`

// TODO
// ============================================
const mostInfluentialContibutors = ''

export async function getTail(){
  const additionalInfoContent = await readFile(`${ __dirname }/assets/ADDITIONAL.md`)
  const changelogContent = await readFile(`${ __dirname }/assets/CHANGELOG.md`)

  return template(templateTail, {
    additionalInfo : additionalInfoContent.toString(),
    changelog      : changelogContent.toString(),
  })
}
